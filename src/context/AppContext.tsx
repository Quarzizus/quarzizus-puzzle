import { createContext, useReducer } from "react";
import { contextReducer, initialState } from "./reducer";
import { Props, Context } from "./types";

const AppContext = createContext({} as Context);

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
