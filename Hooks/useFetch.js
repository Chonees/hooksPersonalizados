import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    if (!url) return;

    setState({
      data: null,
      isLoading: true,
      error: null,
    });

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      const data = await res.json();
      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return state; // Devolver todo el estado completo
};
