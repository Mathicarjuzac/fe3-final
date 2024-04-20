import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const initialState = {
    userList: [],
    favs: [],
    darkMode: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, userList: action.payload };
      case "TOGGLE_MODE":
        return { ...state, darkMode: action.payload };
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
      case "GET_FAVS":
        return { ...state, favs: action.payload };
      case "ELIMINAR_FAV":
        return {
          ...state,
          favs: state.favs.filter((fav) => fav.id !== action.payload),
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "GET_USERS", payload: res.data })
    );
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
