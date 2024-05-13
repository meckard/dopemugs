import { AdvancedImage } from '@cloudinary/react'
import SlCard from '@shoelace-style/shoelace/dist/react/card/index'

export const MugCard = (name,imageId, submit, made) => {
<SlCard className="mug-card">
  <div slot="header">{name}</div>
  <AdvancedImage slot="image" cldImg={imageId}></AdvancedImage>
  <ul>
    <li>{submit}</li>
    <li>{made}</li>
  </ul>
</SlCard>
}