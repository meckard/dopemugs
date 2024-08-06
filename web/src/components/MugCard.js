import { AdvancedImage } from '@cloudinary/react'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'
import { Cloudinary } from '@cloudinary/url-gen'
import { fit } from '@cloudinary/url-gen/actions/resize'
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item/index'

export const MugCard = (name, imageId, submit, made) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djfwwccan',
    },
  })

  const myImage = cld.image(imageId)

  myImage.resize(fit().width(800).height(1000))

  return (
      <SlCarouselItem className='carousel_item'>
        <AdvancedImage cldImg={myImage}></AdvancedImage>
        <div className='card_name'>{name}</div>
        <p>Submitted By: {submit}</p>
        <p>Made By: {made}</p>
      </SlCarouselItem>
  )
}
