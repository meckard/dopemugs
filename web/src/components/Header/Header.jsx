import { Link, routes } from '@redwoodjs/router'
import { useEffect } from 'react'
import SlAnimation from '@shoelace-style/shoelace/dist/react/animation/index'


const Header = () => {

  useEffect(() => {
    const animation = document.getElementById('home')
    const animation2 = document.getElementById('mugs')
    const animation3 = document.getElementById('submit')

    animation.addEventListener('mouseenter', () => {
      animation.play = true
    })

    animation2.addEventListener('mouseenter', () => {
      animation2.play = true
    })

    animation3.addEventListener('mouseenter', () => {
      animation3.play = true
    })

  },[])

  return (
    <header>
      <nav>
        <p className="logo">DM</p>
        <ul className="link-list">
          <SlAnimation id='home' name='bounce' iterations='1' className='hover'>
            <Link to={routes.home()}>
              <li className='link'>Home</li>
            </Link>
          </SlAnimation>
          <SlAnimation id='mugs' name='bounce' iterations='1' className='hover'>
            <Link to={routes.mugs()}>
              <li>Show Me the Mugs!</li>
            </Link>
          </SlAnimation>
          <SlAnimation id='submit' name='bounce' iterations='1' className='hover'>
          <Link to="">
            <li>Submit a Mug</li>
          </Link>
          </SlAnimation>
        </ul>
      </nav>
    </header>
  )
}

export default Header
