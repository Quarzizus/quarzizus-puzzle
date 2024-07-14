import { hasWon } from "../utils/hasWon";
import { Action, InitialState } from "./types";

const initialState = {
  hasWon: false,
  isPause: true,
};

const contextReducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case "SET_HASWON":
      const isWon = hasWon(action.payload);
      return {
        ...state,
        hasWon: isWon,
      };
    case "SET_ISPAUSE":
      return {
        ...state,
        isPause: action.payload,
      };
    default:
      return state;
  }
};

export { contextReducer, initialState };
