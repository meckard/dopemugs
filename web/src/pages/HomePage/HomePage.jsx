import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { ImMug } from "react-icons/im";
import { TiStarburst } from "react-icons/ti";

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className='banner'>
        <h1>Dope Mugs</h1>
        <TiStarburst className='circle' />
        <ImMug className='mug' />
      </div>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
