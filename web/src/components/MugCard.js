import { AdvancedImage } from '@cloudinary/react'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'
import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'

export const MugCard = (name,imageId, submit, made) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djfwwccan',
    },
  })

  const myImage = cld.image(imageId)

  myImage.resize(thumbnail().height(300).width(300))


return (
<SlCard className="mug-card">
  <div slot="header">{name}</div>
  <AdvancedImage slot="image" cldImg={myImage}></AdvancedImage>
  <ul>
    <li>{submit}</li>
    <li>{made}</li>
  </ul>
</SlCard>
)
}