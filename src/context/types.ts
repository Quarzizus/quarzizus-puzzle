import { Dispatch } from "react";
import { BoxType } from "../components/Box/types";

type Action =
  | { type: "SET_HASWON"; payload: BoxType[] }
  | { type: "SET_ISPAUSE"; payload: boolean };

interface InitialState {
  hasWon: boolean;
  isPause: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}
type Context = [initialState: InitialState, dispatch: Dispatch<Action>];

export type { InitialState, Action, Context, Props };
