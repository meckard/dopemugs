import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useState } from 'react'
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react'
import NewDopeMug from 'src/components/DopeMug/NewDopeMug/NewDopeMug'

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
      <div className="submit-form">
      <Metadata title="Submit" description="Submit page" />
        <NewDopeMug/>
      </div>
    </>
  )
}

export default SubmitPage
