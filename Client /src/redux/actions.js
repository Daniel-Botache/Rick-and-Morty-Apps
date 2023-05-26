import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      if (!data.length) throw Error("No hay favoritos");
      return dispatch({
        type: ADD_CHARACTER,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "DELETE_CHARACTER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
