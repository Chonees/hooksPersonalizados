import { useState } from "react";

export const useFetch = () => {
   const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
   });
  
    return {
    data,
    isLoading,
    errors,
  };
};
