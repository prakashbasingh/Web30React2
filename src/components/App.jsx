import React from 'react'
import FriendsList from './FriendsList'
import Search from './Search'

export default function App() {
  // we need to keep track of the current search term
  // we need to keep track of the list of friends
  return (
    <div className='app-friends container'>
      <h1>Friends App</h1>
      {/* what does Search need? */}
      <Search />

      {/* What does FriendsList need? */}
      <FriendsList />
    </div>
  )
}
