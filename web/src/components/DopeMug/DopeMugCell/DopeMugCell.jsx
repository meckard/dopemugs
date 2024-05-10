import DopeMug from 'src/components/DopeMug/DopeMug'

export const QUERY = gql`
  query FindDopeMugById($id: Int!) {
    dopeMug: dopeMug(id: $id) {
      id
      imageURL
      name
      madeBy
      submittedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DopeMug not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dopeMug }) => {
  return <DopeMug dopeMug={dopeMug} />
}
