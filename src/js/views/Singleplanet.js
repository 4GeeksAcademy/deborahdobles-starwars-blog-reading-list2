import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [description, setDescription]= useState({})
	const [properties, setProperties] = useState({});

	const getDescription = () => {
		fetch('https://www.swapi.tech/api/planets/' + params.theid)
		  .then((res) => res.json())
		  .then((data) => {
			setDescription(data.result);
			fetch(data.result.properties.url)
			  .then((res) => res.json())
			  .then((data) => setProperties(data.result.properties));
		  });
	  };

	useEffect(() => {
		getDescription();
	}, []);

	return (
		<div className="jumbotron">
			<h1 className="display-4">{properties.name}  </h1>
				<p>{description.description}</p>
				<div className="paneldescription"> 
					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="imageplanet" alt="..." />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur mauris nec urna lacinia, vitae interdum enim tincidunt. Proin semper est vitae sapien tincidunt, a eleifend purus volutpat.</p>
				</div>
			<hr className="my-4" />
			<div className="caracteristicas">

				<div>
					<h3>Name</h3>
						<p>{properties.name}</p>
				</div>
				<div>
					<h3>Orbital_period</h3>
						<p>{properties.orbital_period}</p>
				</div>
				<div>
					<h3>Diameter</h3>
						<p>{properties.diameter}</p>
				</div>
				<div>
					<h3>Climate</h3>
						<p>{properties.climate}</p>
				</div>
				<div>
					<h3>Terrain</h3>
						<p>{properties.terrain}</p>
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

	SinglePlanet.propTypes = {
	match: PropTypes.object
	};
