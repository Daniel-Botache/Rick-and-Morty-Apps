import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHARACTER:
      return { ...state, myFavorites: payload, allCharacters: payload };
    case DELETE_CHARACTER:
      return { ...state, myFavorites: payload };
    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
