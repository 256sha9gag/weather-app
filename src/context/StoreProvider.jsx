import React, { createContext, useReducer } from "react";

import reducer from "../store/reducer";
import initialState from "../store/initialState";

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      { children }
    </StoreContext.Provider>
  )
}

export default StoreProvider;
