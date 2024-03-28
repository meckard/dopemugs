import { render } from '@redwoodjs/testing/web'

import DopemugsLayout from './DopemugsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DopemugsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DopemugsLayout />)
    }).not.toThrow()
  })
})
