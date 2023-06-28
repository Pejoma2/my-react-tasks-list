import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/SobreNosotros">Sobre Nosotros</NavLink>
            </li>
            <li>
                <NavLink to="/Tareas">Lista Tareas</NavLink>
            </li>
        </ul>
      
    </nav>
    </div>
  )
}
