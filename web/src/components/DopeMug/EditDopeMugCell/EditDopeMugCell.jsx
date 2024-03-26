import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DopeMugForm from 'src/components/DopeMug/DopeMugForm'

export const QUERY = gql`
  query EditDopeMugById($id: Int!) {
    dopeMug: dopeMug(id: $id) {
      id
      imageURL
      name
      madeBy
    }
  }
`

const UPDATE_DOPE_MUG_MUTATION = gql`
  mutation UpdateDopeMugMutation($id: Int!, $input: UpdateDopeMugInput!) {
    updateDopeMug(id: $id, input: $input) {
      id
      imageURL
      name
      madeBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dopeMug }) => {
  const [updateDopeMug, { loading, error }] = useMutation(
    UPDATE_DOPE_MUG_MUTATION,
    {
      onCompleted: () => {
        toast.success('DopeMug updated')
        navigate(routes.dopeMugs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDopeMug({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DopeMug {dopeMug?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DopeMugForm
          dopeMug={dopeMug}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
