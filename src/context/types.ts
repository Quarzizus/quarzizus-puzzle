import { Dispatch } from "react";
import { BoxType } from "../components/Box/types";

interface InitialState {
  hasWon: boolean;
  isPause: boolean;
  time: number;
  list: BoxType[];
}

type Action =
  | { type: "SET_HASWON"; payload: BoxType[] }
  | { type: "SET_ISPAUSE"; payload: boolean }
  | { type: "SET_TIME"; payload: number }
  | { type: "SET_LIST"; payload: BoxType[] }
  | { type: "RESET" };

interface Props {
  children: JSX.Element | JSX.Element[];
}
type Context = [initialState: InitialState, dispatch: Dispatch<Action>];

export type { InitialState, Action, Context, Props };
