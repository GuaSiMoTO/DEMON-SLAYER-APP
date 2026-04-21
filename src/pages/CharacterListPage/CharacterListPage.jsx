import { useDemonSearch } from './hooks/useDemonSearch'; // Verifica que la ruta sea correcta

import { useEffect } from 'react';

const { characters, loading, error, search } = useDemonSearch();
    useEffect(() => {
    search(5); // carga inicial
  }, []);