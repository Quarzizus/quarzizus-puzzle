import { generateSequence } from "../utils/generateSequence";
import { hasWon } from "../utils/hasWon";
import { Action, InitialState } from "./types";

const initialState = {
  hasWon: false,
  isPause: true,
  time: 0,
  list: generateSequence(24),
};

const contextReducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case "SET_HASWON":
      const isWon = hasWon(action.payload);
      if (isWon) return { ...state, isPause: true, hasWon: isWon };
      return {
        ...state,
        hasWon: isWon,
      };
    case "SET_ISPAUSE":
      return {
        ...state,
        isPause: action.payload,
      };
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export { contextReducer, initialState };
