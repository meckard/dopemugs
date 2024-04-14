import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { ImMug } from 'react-icons/im'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <section>
        <div className="banner">
          <ImMug className="mug" />
          <h1>Dope Mugs</h1>
          <h2>Showing you the very dopest mugs</h2>
        </div>
      </section>
    </>
  )
}

export default HomePage
