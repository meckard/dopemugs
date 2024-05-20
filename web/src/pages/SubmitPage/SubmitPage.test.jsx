import { render } from '@redwoodjs/testing/web'

import SubmitPage from './SubmitPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubmitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitPage />)
    }).not.toThrow()
  })
})
