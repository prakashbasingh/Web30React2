import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
import friendsData from '../dummy-data/friends'


export default function App() {
  // we need to keep track of the list of friends
  // we need to keep track of the current search term
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
