export const schema = gql`
  type DopeMug {
    id: Int!
    imageURL: String!
    name: String
    madeBy: String!
  }

  type Query {
    dopeMugs: [DopeMug!]! @requireAuth
    dopeMug(id: Int!): DopeMug @requireAuth
  }

  input CreateDopeMugInput {
    imageURL: String!
    name: String
    madeBy: String!
  }

  input UpdateDopeMugInput {
    imageURL: String
    name: String
    madeBy: String
  }

  type Mutation {
    createDopeMug(input: CreateDopeMugInput!): DopeMug! @requireAuth
    updateDopeMug(id: Int!, input: UpdateDopeMugInput!): DopeMug! @requireAuth
    deleteDopeMug(id: Int!): DopeMug! @requireAuth
  }
`
