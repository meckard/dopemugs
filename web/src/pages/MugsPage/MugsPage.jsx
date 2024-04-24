import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'

import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const MugsPage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djfwwccan',
    },
  })

  const myImage = cld.image('sample')
  console.log(myImage)

  return (
    <>
      <Metadata title="Mugs" description="Mugs page" />
      <div className="mugs-page">
        <h1>The Mugs</h1>
        <SlCard className="mug-card">
          <div slot="header">Dope Mug Name</div>
          <AdvancedImage slot="image" cldimg={myImage}></AdvancedImage>
          <div slot="footer">
            <ul>
              <li>Submitted by: Me</li>
              <li>Made by: Target</li>
            </ul>
          </div>
        </SlCard>
      </div>
    </>
  )
}

export default MugsPage
