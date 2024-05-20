import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useState } from 'react'
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react'

const SubmitPage = () => {
  const [publicId, setPublicId] = useState('')
  // Replace with your own cloud name
  const [cloudName] = useState('djfwwccan')
  // Replace with your own upload preset
  const [uploadPreset] = useState('ml_default')

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  })

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djfwwccan',
    },
  })

  const myImage = cld.image(publicId)

  return (
    <>
      <Metadata title="Submit" description="Submit page" />
      <div className="mug-submit">
        <h2>Submit a Mug!</h2>
        <p>
          A few quick rules first:
          <ol>
            <li>Dope Mugs Only: What else did you expect?</li>
            <li></li>
          </ol>
        </p>
        <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
        <div style={{ width: '800px' }}>
          <AdvancedImage
            style={{ maxWidth: '100%' }}
            cldImg={myImage}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      </div>
    </>
  )
}

export default SubmitPage
