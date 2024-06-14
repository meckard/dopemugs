import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  FileField,
  Submit,
} from '@redwoodjs/forms'

import DOMPurify from "dompurify"

const DopeMugForm = (props) => {
  //Parameters to upload to Cloudinary
  const imageToCloudinary = async (image) => {
    const url = 'https://api.cloudinary.com/v1_1/djfwwccan/image/upload'
    const preset = 'ml_default'

    //Prepares data to send
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', preset)


    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('upload failed')
      }

      const data = await response.json()
      console.log('Image uploaded successfully', data)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  const onSubmit = async (data) => {

     const modifiedData = {
      imageURL: DOMPurify.sanitize(data.imageURL[0].name),
      madeBy: DOMPurify.sanitize(data.madeBy),
      name: DOMPurify.sanitize(data.name),
      submittedBy: DOMPurify.sanitize(data.submittedBy)
    }

    props.onSave(modifiedData, props?.dopeMug?.id)

    console.log(data)
    imageToCloudinary(data.imageURL[0])
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="imageURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <FileField
          name="imageURL"
          defaultValue={props.dopeMug?.imageURL}
          className="rw-input image-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageURL" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.dopeMug?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="madeBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Made by
        </Label>

        <TextField
          name="madeBy"
          defaultValue={props.dopeMug?.madeBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="madeBy" className="rw-field-error" />

        <Label
          name="submittedBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Submitted by
        </Label>

        <TextField
          name="submittedBy"
          defaultValue={props.dopeMug?.submittedBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="submittedBy" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Send the Dope Mug!
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DopeMugForm
