import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const handleRemoveFavorite = (event, message) => {
    event.stopPropagation(); 
    actions.RemoveFavorite(message);
  };
  

  return (
    <nav className="navbar navbar-light mb-0">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img className="imagenlogo" src={"https://w7.pngwing.com/pngs/4/136/png-transparent-star-wars-anakin-skywalker-logo-star-wars-text-number-desktop-wallpaper.png"} alt="Star Wars" style={{maxHeight:100, maxWidth:100}} />
        </span>
      </Link>
      <div className="dropdown">
        <Link
          className="btn btn-warning dropdown-toggle favorite"
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          My Favorites
        </Link>

        <ul className="dropdown-menu listafavoritos" aria-labelledby="dropdownMenuLink">
          {store.message && store.message.length > 0 ?  store.message.map((message, index) => (
            <li className="list-group-item lista" key={index}>{message}  <button className="btn btn-link botonx" onClick={(event) => handleRemoveFavorite(event, message)} >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button></li>
          )): <li className="emptylist mr-2" style={{ width: '150px', fontSize: '15px' }}>Your List Is Empty</li>}
        </ul>
      </div>
    </nav>
  );
};
