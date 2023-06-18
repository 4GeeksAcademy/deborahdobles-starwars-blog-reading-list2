import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [description, setDescription]= useState({})
	const [properties, setProperties] = useState({});


	const getDescription = () => {
		fetch('https://www.swapi.tech/api/people/' + params.theid)
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
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="imagenpersonaje" alt="..." />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur mauris nec urna lacinia, vitae interdum enim tincidunt. Proin semper est vitae sapien tincidunt, a eleifend purus volutpat.</p>
				</div>
			<hr className="my-4" />
			<div className="caracteristicas">

				<div>
					<h3>Name</h3>
						<p>{properties.name}</p>
				</div>

				<div>
					<h3>Birth Year</h3>
						<p>{properties.birth_year}</p>
				</div>
				<div>
					<h3>Gender</h3>
						<p>{properties.gender}</p>
				</div>
				<div>
					<h3>Height</h3>
						<p>{properties.height}</p>
				</div>
				<div>
					<h3>Skin Color</h3>
						<p>{properties.skin_color}</p>
				</div>
				<div>
					<h3>Eye Color</h3>
						<p>{properties.eye_color}</p>
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

Single.propTypes = {
	match: PropTypes.object
};