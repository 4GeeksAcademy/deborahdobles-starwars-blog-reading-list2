import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [descriptionplanet, setDescriptionplanet] = useState({})
	const [propertiesplanet, setPropertiesplanet] = useState({});

	const getDescriptionPlanet = () => {
		fetch("https://www.swapi.dev/api/planets/" + params.theid)
			.then((res) => res.json())
			.then((data) => {
			setDescriptionplanet(data.result);
			fetch(data.result.properties.url)
				.then((res) => res.json())
				.then((data) => setPropertiesplanet(data.result.properties));
		});
	};

	useEffect(() => {
		getDescriptionPlanet();
	}, []);

	return (
		<div className="jumbotron">
			<h1 className="display-4">{propertiesplanet.name}  </h1>
				<p>{descriptionplanet.description}</p>
				<div className="paneldescription"> 
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="imageplanet" alt="..." />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur mauris nec urna lacinia, vitae interdum enim tincidunt. Proin semper est vitae sapien tincidunt, a eleifend purus volutpat.</p>
				</div>
			<hr className="my-4" />
			<div className="caracteristicas">

				<div>
					<h3>Name</h3>
						<p>{propertiesplanet.name}</p>
				</div>
				<div>
					<h3>Rotation_period</h3>
						<p>{propertiesplanet.Rotation_period}</p>
				</div>
				<div>
					<h3>Orbital_period</h3>
						<p>{propertiesplanet.orbital_period}</p>
				</div>
				<div>
					<h3>Diameter</h3>
						<p>{propertiesplanet.diameter}</p>
				</div>
				<div>
					<h3>Climate</h3>
						<p>{propertiesplanet.climate}</p>
				</div>
				<div>
					<h3>Terrain</h3>
						<p>{propertiesplanet.terrain}</p>
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
