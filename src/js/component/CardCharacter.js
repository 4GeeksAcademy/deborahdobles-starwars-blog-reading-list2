import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardCharacter = (props) => {
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
            <h2 className="card-title">{props.name}</h2>

              <div className="propiedades">
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.hair}</p>
                <p>Eye Color: {props.eyes}</p>
              </div>
            <div className="botonescarta">

              <Link to={"/Single/" + props.uid} className="btn btn-primary learnbutton">
                Learn More!
              </Link>

              <button
                type="button"
                className= {`btn btn-outline-warning botonlearn ${buttonColor ? "orange-bg" : ""}`}
                onClick={() => {
                  changeButtonBackground();
                  actions.changeMessage("(C) "+props.name);
                }}>
                <i className="fa fa-heart text-warning" />
              </button>
            </div>
          </div>
        </div>
    );
  };
  export default CardCharacter;