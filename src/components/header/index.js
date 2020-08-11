import React from 'react';

import { Nav } from './style';

import Logo from '../../assets/pokemon_logo.png'

const Header = () => {

  return (
    <Nav>
      <img src={Logo} alt="Logo Pokemon" />
      <ul>
        <li><a>Sobre</a></li>
        <li><a>Sobre</a></li>
        <li><a>Sobre</a></li>
        <li><a>Sobre</a></li>
      </ul>
    </Nav>
  )
}

export default Header;