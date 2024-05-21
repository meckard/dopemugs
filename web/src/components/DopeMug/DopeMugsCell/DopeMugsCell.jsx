import { Link, routes } from '@redwoodjs/router'

import DopeMugs from 'src/components/DopeMug/DopeMugs'
import { MugCard } from 'src/components/MugCard'
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel/index'

export const QUERY = gql`
  query FindDopeMugs {
    dopeMugs {
      id
      imageURL
      name
      madeBy
      submittedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dopeMugs yet. '}
      <Link to={routes.newDopeMug()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dopeMugs }) => {
  console.log(dopeMugs)
   return(
    <SlCarousel navigation>
    {dopeMugs.map(mug => {
      return MugCard(mug.name, mug.imageURL, mug.submittedBy, mug.madeBy )
    })}
    </SlCarousel>)

}
