import React, { useState, useEffect } from 'react';

import { Container } from './style';

import Card from '../../components/card';

import api from '../../service/api';

const Main = () => {

  const [page,setPage] = useState(0);

  const [pokemons, setPokemons] = useState([]);

  function nextPage(){
    setPage(page++);
  }

  function previousPage(){
    setPage(page--);
  }

  useEffect(() => {
    api.get('https://pokeapi.co/api/v2/pokemon',{ params: {
        offset:page,
        limit:5
      }})
      .then(response => {
        console.log('data: ',response.data);
        setPokemons(response.data.results);
      })
      .catch(err => {
        console.log('err: ',err);
      });
  },[]);

  return (
    <Container>
      {pokemons.map(pokemon => (
        <Card key={pokemon.name} pokemon={pokemon}/>
      ))}
    </Container>
  )
}

export default Main;