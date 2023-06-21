import React, { useContext, useState }from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter";
import CardPlanet from "../component/CardPlanet";
import { Context } from "../store/appContext";

const Home = () => {

	const [character, setCharacter] = useState([]);
	const [planet, setPlanet] = useState([]);
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
    {store.planet.map((planet, index) => {
      // console.log(parseInt(planet.url.slice(-2)))
      let image;
      if (index === 0){
        image = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
      } else {
        image = `https://starwars-visualguide.com/assets/img/planets/${index + 1 }.jpg`
      }
      
      return (
          <CardPlanet
          key={index + 1}
          nameplanet={planet.name}
          character={planet}
          rotation_period={planet.rotation_period}
          orbital_period={planet.orbital_period}
          diameter={planet.diameter}
          climate={planet.climate}
          terrain={planet.terrain}
          uid={index + 1}
          img={image}
          />
    )})}
        </div>
  
		    </div>
  );
}
export default Home;