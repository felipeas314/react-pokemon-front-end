import React, {useEffect,useState} from 'react';

import api from '../../service/api';

import { CardContainer } from './style';

const Card = ({pokemon}) => {

  const [pokemonDetail, setPokemonDetail] = useState({}); 

  useEffect(() => {
    api.get(pokemon.url)
      .then(response => {
        setPokemonDetail(response.data);
        console.log('pokemon detail:',response.data);
      })
      .catch(err => {
        console.log('err:',err);
      })
  },[]);

  return (
    <CardContainer>
      <p>{pokemon.name}</p>
      {pokemonDetail.sprites && <img src={pokemonDetail.sprites.other.dream_world.front_default} /> }
      {/* <img src={pokemonDetail.sprites.other.dream_world.front_default}></img> */}
      <a href="#">Detalhes</a>
    </CardContainer>
  );
}

export default Card;