import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const App = () => (
  <main>
    <h1>@mc/react-multiples rotas</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
  </main>
)

export default App