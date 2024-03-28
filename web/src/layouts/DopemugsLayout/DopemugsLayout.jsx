import { Link, routes } from '@redwoodjs/router'

const DopemugLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <p>DM</p>
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
      {children}
    </>
  )
}

export default DopemugLayout
