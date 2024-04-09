import { render } from '@redwoodjs/testing/web'

import MugsPage from './MugsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MugsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MugsPage />)
    }).not.toThrow()
  })
})
