const API_KEY = import.meta.env.VITE_API_GEMINI_KEY; //Traemos la API KEY de .env

async function askGemini(answer) {
  const MODEL = "gemini-3-flash-preview"; 
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  
  // Opcional: Si el prompt viene vacío, no gastes una llamada a la API
  if (!answer) return "No me has enviado nada";
  
  // estructura del json que hay que enviarle a la API, dentro está el answer que llega como parámetro en la función
  const payload = {
    contents: [
      {
        parts: [
          { text: `Role: Eres un experto y el mejor fan de Demon Slayer anime, te conoces todos los personajes y series.
            Contesta a esta pregunta : ${answer}.
            Instrucciones: contesta directo, breve, saluda pero simplemente sin ninguna pregunta más.
            Si te preguntan sobre otra cosa que no sea sobre el anime de DEMON SLAYER, recuerdales que solo contestas sobre el anime` } // prompt aquí! tu mensaje para pasarselo a la IA
        ]
      }
    ]
  };
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) { // Aquí si la respuesta no es OK (si falla) da mensaje de ERROR
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.error.message}`);
    }
    
    //obtenemos la repuesta en .json() a data
    const data = await response.json();
    
    // La respuesta de Gemini viene en una estructura anidada:
    // candidates -> content -> parts -> [0].text
    const textResponse = data.candidates[0].content.parts[0].text; //aquí para obtener directamente el texto que te envia como respuesta la IA GEMINI
   
    return textResponse; // aqui devolvemos el resultado de la IA GEMINI directo ya en texto

  } catch (error) {
    console.error("Fallo al llamar a Gemini:", error);
    throw error;
  }
}

export default askGemini;
