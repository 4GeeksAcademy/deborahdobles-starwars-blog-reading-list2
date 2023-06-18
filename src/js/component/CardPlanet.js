import React,  {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardPlanet = (props) => {
    const [buttonColor, setButtonColor] = useState("");
    const changeButtonBackground = () => {
      setButtonColor("orange");
     
    };
    const { store, actions } = useContext(Context);
     console.log(actions.changeMessage)
    return (
      <div className="card" style={{ width: "20%", display: "inline-block" }}>
        <img src={props.img} className="card-img-top" alt="..." />

        <div className="card-body">
        <h2 className="card-title">{props.nameplanet}</h2>

            <div className="properties">
              <p>Population: {props.population}</p>
              <p>Terrain: {props.terrain}</p>
            </div>
          <div className="botonescarta">

            <Link to={"/SinglePlanet/" + props.uid} className="btn btn-primary learnbutton">
              Learn More!
            </Link>

            <button
              type="button"
              className= {`btn btn-outline-warning botonlearn ${buttonColor ? "orange-bg" : ""}`}
              onClick={() => {
                changeButtonBackground();
                actions.changeMessage("(P) "+props.nameplanet);
              }}>
              <i className="fa fa-heart text-warning" />
            </button>
          </div>
        </div>
      </div>
    );
    };
    export default CardPlanet;