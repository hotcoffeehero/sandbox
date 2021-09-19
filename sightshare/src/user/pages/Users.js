import React from 'react'
import UsersList from '../components/UsersList'
import '../../dummy_fots/me.jpg'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Clinton A.',
      image: 'me.jpg',
      places: 3,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
