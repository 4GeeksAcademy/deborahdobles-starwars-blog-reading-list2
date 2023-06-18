import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlevehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [descriptionv, setDescriptionv]= useState({})
	const [propertiesv, setPropertiesv] = useState({});


	const getDescriptionv = () => {
		fetch('https://www.swapi.dev/api/vehicles/' + params.theid)
		  .then((res) => res.json())
		  .then((data) => {
			setDescriptionv(data.result);
			fetch(data.result.properties.url)
			  .then((res) => res.json())
			  .then((data) => setPropertiesv(data.result.properties));
		  });
	  };
	
	  useEffect(() => {
		getDescriptionv();
	  }, []);

	return (
		<div className="jumbotron">
			<h1 className="display-4">{propertiesv.name}  </h1>
				<p>{descriptionv.description}</p>
				<div className="paneldescription"> 
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="imagenvehiculo" alt="..." />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur mauris nec urna lacinia, vitae interdum enim tincidunt. Proin semper est vitae sapien tincidunt, a eleifend purus volutpat.</p>
				</div>
			<hr className="my-4" />
			<div className="caracteristicas">

				<div>
					<h3>Name</h3>
						<p>{propertiesv.name}</p>
				</div>

				<div>
					<h3>Vehicle_class</h3>
						<p>{propertiesv.vehicle_class}</p>
				</div>
				<div>
					<h3>Manufacturer</h3>
						<p>{propertiesv.manufacturer}</p>
				</div>
				<div>
					<h3>Cost_in_credits</h3>
						<p>{propertiesv.cost_in_credits}</p>
				</div>
				<div>
					<h3>Length</h3>
						<p>{propertiesv.length}</p>
				</div>
				<div>
					<h3>Crew</h3>
						<p>{propertiesv.crew}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-warning btn-lg botondes" href="#" role="button">
					Go Back home
				</span>
			</Link>
		</div>
	);
};

Singlevehicle.propTypes = {
	match: PropTypes.object
};