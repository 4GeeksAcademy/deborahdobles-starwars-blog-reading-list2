import React,  {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardVehicle = (props) => {
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
        <h2 className="card-title">{props.namevehicle}</h2>

            <div className="properties">
            <p>Model: {props.model}</p>
            <p>Vehicle_class: {props.vehicle_class}</p>
            <p>Manufacturer: {props.manufacturer}</p>            
            </div>
          <div className="botonescarta">

            <Link to={"/SingleVehicle/" + props.uid} className="btn btn-primary learnbutton">
              Learn More!
            </Link>

            <button
              type="button"
              className= {`btn btn-outline-warning botonlearn ${buttonColor ? "orange-bg" : ""}`}
              onClick={() => {
                changeButtonBackground();
                actions.changeMessage("(V) "+props.namevehicle);
              }}>
              <i className="fa fa-heart text-warning" />
            </button>
          </div>
        </div>
      </div>
    );
    };
    export default CardVehicle;