import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'
import DopeMugsCell from 'src/components/DopeMug/DopeMugsCell'

const MugsPage = () => {
  return (
    <>
      <Metadata title="Mugs" description="Mugs page" />
      <div className="mugs-page">
        <h1>The Mugs</h1>
        <DopeMugsCell />
      </div>
    </>
  )
}

export default MugsPage
