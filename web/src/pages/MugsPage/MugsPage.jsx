import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MugsPage = () => {
  return (
    <>
      <Metadata title="Mugs" description="Mugs page" />

      <h1>MugsPage</h1>
      <p>
        Find me in <code>./web/src/pages/MugsPage/MugsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>mugs</code>, link to me with `
        <Link to={routes.mugs()}>Mugs</Link>`
      </p>
    </>
  )
}

export default MugsPage
