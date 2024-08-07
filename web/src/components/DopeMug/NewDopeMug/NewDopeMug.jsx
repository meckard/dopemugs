import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import DopeMugForm from 'src/components/DopeMug/DopeMugForm'

const CREATE_DOPE_MUG_MUTATION = gql`
  mutation CreateDopeMugMutation($input: CreateDopeMugInput!) {
    createDopeMug(input: $input) {
      id
    }
  }
`

const NewDopeMug = () => {
  const [createDopeMug, { loading, error }] = useMutation(
    CREATE_DOPE_MUG_MUTATION,
    {
      onCompleted: () => {
        toast.success('DopeMug created!')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDopeMug({ variables: { input } })
    console.log({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Submit a mug!</h2>
      </header>
      <div className="rw-segment-main">
        <DopeMugForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDopeMug
