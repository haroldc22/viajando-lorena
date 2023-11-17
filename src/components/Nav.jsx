import React from 'react'
import logo from '../assets/logo.jpeg'

function Nav() {
  return (
    <header class="header">
        <input type="checkbox" id="toggle" />

        <label for="toggle"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </label>

        <img id="logo" src={logo} alt="logo" />

        <nav class="nav_menú">
            <ul>
                <li><a href="#sección_1">¿Quién soy?</a></li>
                <li><a href="#sección_2">Viajemos con Lore</a></li>
                <li><a href="#sección_3">Servicios</a></li>
                <li><a href="#clientes">Clientes</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav;
