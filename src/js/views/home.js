import React, { useContext, useState }from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter";
import CardPlanet from "../component/CardPlanet";
import CardVehicle from "../component/CardVehicle";
import { Context } from "../store/appContext";

const Home = () => {

	const [character, setCharacter] = useState([]);
	const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);
	const {store} = useContext(Context)

  console.log(store);

	return(
	<div className="text-center bg-black mt-1">


		<h1 className="titles">Characters</h1>
		<div className="card container" style={{ display: "block"}}>
		{store.character.map((character, index) => (
          <CardCharacter
            key={index + 1}
            name={character.name}
            character={character}
            gender={character.gender}
            hair={character.hair_color}
            eyes={character.eye_color}
            uid={index + 1}
			img={`https://starwars-visualguide.com/assets/img/characters/${index + 1 }.jpg`}
          />
        ))}
		      </div>


      <h1 className="titles">Planets</h1>
      <div className="card container" style={{ display: "inline-block"}}>
    {store.planet.map((planet, index) => (
          <CardPlanet
          key={index + 1}
          nameplanet={planet.name}
          character={planet}
          rotation_period={planet.rotation_period}
          orbital_period={planet.orbital_period}
          diameter={planet.diameter}
          climate={planet.climate}
          terrain={planet.terrain}
          uidplanet={index + 1}
          img={`https://starwars-visualguide.com/assets/img/planets/${index + 1 }.jpg`}
          />
        ))}
        </div>
  

      <h1 className="titles">Vehicles</h1>
      <div className="card container" style={{ display: "inline-block"}}>
    {store.vehicle.map((vehicle, index) => (
          <CardVehicle
            key={index + 1}
            namevehicle= {vehicle.name}
            vehicle={vehicle}
            model={vehicle.model}
            vehicle_class={vehicle.vehicle_class}
            manufacturer={vehicle.manufacturer}
            cost_in_credits={vehicle.cost_in_credits}
            length={vehicle.length}
            crew={vehicle.crew}
            uidvehicle= {index + 1}
			img={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1 }.jpg`}
          />
        ))}
		    </div>
	</div>
  );
}
export default Home;