import { ADD_CHARACTER, DELETE_CHARACTER } from "./actions";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTER:
      return { ...state, myFavorites: [...state.myFavorites, payload] };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== payload
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
