import React from 'react'
import '../../stylesheets/user/UsersList.css'

import UserItem from './UserItem'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>There are no users. Be the first!</h2>
      </div>
    )
  }

  return (
    <ul className='users-list'>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
}

export default UsersList
