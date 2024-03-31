import { Link, routes } from '@redwoodjs/router'
import logo from './dope-mugs-high-resolution-logo-transparent.png'

const Header = () => {
  return (
    <header>
        <nav>
          <img className='logo' src={logo} alt='logo'/>
          <ul>
            <Link to={routes.home()}>
              <li>Home</li>
            </Link>
            <Link to=''>
              <li>Show Me the Mugs!</li>
            </Link>
            <Link to=''>
              <li>Submit a Mug</li>
            </Link>
          </ul>
        </nav>
      </header>
  )
}

export default Header
