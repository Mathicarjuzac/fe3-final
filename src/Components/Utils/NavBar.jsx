import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

const NavBar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggle = () => {
    dispatch({ type: "TOGGLE_MODE", payload: !state.darkMode });
  };
  useEffect(() => {
    const theme = state.darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [state.darkMode]);

  console.log(state);

  return (
    <div className="navBar">
      <ul>
        <Link to={`/`}>
          <li>Inicio</li>
        </Link>
        <Link to={`/favs`}>
          <li>Destacados ({state.favs.length})</li>
        </Link>
        <Link to={`/contact`}>
          <li>Contactanos</li>
        </Link>
        
      </ul>
      <div>
        <button onClick={toggle}>
          {!state.darkMode ? <WiDaySunny /> : <WiMoonWaningCrescent3 />}
        </button>
      </div>
    </div>
  );
};

export default React.memo(NavBar);
