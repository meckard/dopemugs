import { db } from 'src/lib/db'

export const dopeMugs = () => {
  return db.dopeMug.findMany()
}

export const dopeMug = ({ id }) => {
  return db.dopeMug.findUnique({
    where: { id },
  })
}

export const createDopeMug = ({ input }) => {
  return db.dopeMug.create({
    data: input,
  })
}

export const updateDopeMug = ({ id, input }) => {
  return db.dopeMug.update({
    data: input,
    where: { id },
  })
}

export const deleteDopeMug = ({ id }) => {
  return db.dopeMug.delete({
    where: { id },
  })
}
