export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const addFav = (character) => {
  return { type: ADD_CHARACTER, payload: character };
};

export const deleteFav = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};
