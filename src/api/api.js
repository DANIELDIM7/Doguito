import axios from "axios";

// Con axios podemos hacer peticiones a una API

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const buscar = async (url, setData) => {
  const respuesta = await api.get(url);

  setData(respuesta.data);
  // Esta función hacemos una petición a la api que viene dada por la dirección url, luego la guardamos en la constante respuesta y luego la metemos en setData
};
