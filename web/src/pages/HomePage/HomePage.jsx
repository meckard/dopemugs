import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { ImMug } from 'react-icons/im'
import { TiStarburst } from 'react-icons/ti'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <section>
        <div className="banner">
          <h1>Dope Mugs</h1>
          <TiStarburst className="circle" />
          <ImMug className="mug" />
        </div>
        <h2>Showing you the very dopest mugs</h2>
      </section>
    </>
  )
}

export default HomePage
