import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import axios from "axios";
import { Container, Row } from "shards-react";
import PokeCard from "../components/PokeCard";

const POKE_URL =
  "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";

const Home = () => {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    axios.get(POKE_URL).then(response => {
      setPokemons(response.data);
      console.log(typeof response.data);
    });
  }, []);
  return (
    <>
      <Container>
        <Row>
          {pokemons !== undefined &&
            pokemons.map(item => {
              return <PokeCard pokemon={item} />;
            })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
