import {
  dopeMugs,
  dopeMug,
  createDopeMug,
  updateDopeMug,
  deleteDopeMug,
} from './dopeMugs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dopeMugs', () => {
  scenario('returns all dopeMugs', async (scenario) => {
    const result = await dopeMugs()

    expect(result.length).toEqual(Object.keys(scenario.dopeMug).length)
  })

  scenario('returns a single dopeMug', async (scenario) => {
    const result = await dopeMug({ id: scenario.dopeMug.one.id })

    expect(result).toEqual(scenario.dopeMug.one)
  })

  scenario('creates a dopeMug', async () => {
    const result = await createDopeMug({
      input: {
        imageURL: 'String2152662',
        madeBy: 'String',
        submittedBy: 'String',
      },
    })

    expect(result.imageURL).toEqual('String2152662')
    expect(result.madeBy).toEqual('String')
    expect(result.submittedBy).toEqual('String')
  })

  scenario('updates a dopeMug', async (scenario) => {
    const original = await dopeMug({ id: scenario.dopeMug.one.id })
    const result = await updateDopeMug({
      id: original.id,
      input: { imageURL: 'String31874332' },
    })

    expect(result.imageURL).toEqual('String31874332')
  })

  scenario('deletes a dopeMug', async (scenario) => {
    const original = await deleteDopeMug({
      id: scenario.dopeMug.one.id,
    })
    const result = await dopeMug({ id: original.id })

    expect(result).toEqual(null)
  })
})
