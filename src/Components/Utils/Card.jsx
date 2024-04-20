import React, { useContext } from "react";
import Avatar from "../../Assets/avatar.jpg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import Toastify from "toastify-js";

const Card = ({ user }) => {
  const { id, name, username } = user;

  const { state, dispatch } = useContext(GlobalContext);

  const addToFav = () => {
    if (!isInFavs(user.id)) {
      dispatch({ type: "ADD_FAV", payload: user });
      localStorage.setItem("user", JSON.stringify([...state.favs, user]));
      displayToast("Se agregó a destacados");
    } else {
      alert("¡Ya se encuentra en tus destacados!");
    }
  };
  const isInFavs = (id) => {
    return state.favs.some((user) => user.id == id);
  };
  const displayToast = (mensaje) => {
    Toastify({
      text: mensaje,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        width: "300px",
      },
      gravity: "bottom",
      position: "center",
      duration: 1000,
    }).showToast();
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={Avatar} alt="foto de perfil" width={120} />
      </Link>
      <h3>{name}</h3>
      <p>
        {user.phone}
      </p>
      <p>
        {user.email}
      </p>
      <p>
        <span>Ubicación:</span> {user.address.city}
      </p>
      <p id="more">
        <Link to={`/dentist/${id}`}>Más info...</Link>
      </p>

      <div>
        {isInFavs(user.id) ? (
          <button disabled style={{ color: "red" }}>
            ❤️
          </button>
        ) : (
          <button onClick={addToFav}>Añadir a destacados</button>
        )}
      </div>
    </div>
  );
};

export default Card;
