import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/DopeMug/DopeMugsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_DOPE_MUG_MUTATION = gql`
  mutation DeleteDopeMugMutation($id: Int!) {
    deleteDopeMug(id: $id) {
      id
    }
  }
`

const DopeMugsList = ({ dopeMugs }) => {
  const [deleteDopeMug] = useMutation(DELETE_DOPE_MUG_MUTATION, {
    onCompleted: () => {
      toast.success('DopeMug deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dopeMug ' + id + '?')) {
      deleteDopeMug({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image url</th>
            <th>Name</th>
            <th>Made by</th>
            <th>Submitted by</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dopeMugs.map((dopeMug) => (
            <tr key={dopeMug.id}>
              <td>{truncate(dopeMug.id)}</td>
              <td>{truncate(dopeMug.imageURL)}</td>
              <td>{truncate(dopeMug.name)}</td>
              <td>{truncate(dopeMug.madeBy)}</td>
              <td>{truncate(dopeMug.submittedBy)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dopeMug({ id: dopeMug.id })}
                    title={'Show dopeMug ' + dopeMug.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDopeMug({ id: dopeMug.id })}
                    title={'Edit dopeMug ' + dopeMug.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete dopeMug ' + dopeMug.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dopeMug.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DopeMugsList
