import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_DOPE_MUG_MUTATION = gql`
  mutation DeleteDopeMugMutation($id: Int!) {
    deleteDopeMug(id: $id) {
      id
    }
  }
`

const DopeMug = ({ dopeMug }) => {
  const [deleteDopeMug] = useMutation(DELETE_DOPE_MUG_MUTATION, {
    onCompleted: () => {
      toast.success('DopeMug deleted')
      navigate(routes.dopeMugs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dopeMug ' + id + '?')) {
      deleteDopeMug({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DopeMug {dopeMug.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dopeMug.id}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{dopeMug.imageURL}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{dopeMug.name}</td>
            </tr>
            <tr>
              <th>Made by</th>
              <td>{dopeMug.madeBy}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDopeMug({ id: dopeMug.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dopeMug.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default DopeMug
