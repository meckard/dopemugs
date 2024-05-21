import { AdvancedImage } from '@cloudinary/react'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'
import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item/index'

export const MugCard = (name, imageId, submit, made) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djfwwccan',
    },
  })

  const myImage = cld.image(imageId)

  myImage.resize(thumbnail().height(300).width(300))

  return (
      <SlCarouselItem>
        <div>{name}</div>
        <AdvancedImage cldImg={myImage}></AdvancedImage>
        <p>Submitted By: {submit}</p>
        <p>Made By: {made}</p>
      </SlCarouselItem>
  )
}
