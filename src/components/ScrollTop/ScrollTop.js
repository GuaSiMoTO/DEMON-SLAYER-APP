import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname , search } = useLocation(); //si cambia de pagina o de search (paginación)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]); // se dispara cada vez que cambia la ruta

  return null;
}

export default ScrollToTop;