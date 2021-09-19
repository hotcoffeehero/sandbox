import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Clinton A.',
      image: 'https://photos.app.goo.gl/mHuoPNaUBbDZ3MAx8',
      places: 3,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
