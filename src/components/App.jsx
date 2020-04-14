import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
import friendsData from '../dummy-data/friends'


export default function App() {
  // we need to keep track of the list of friends
  const [friends, setFriends] = useState(friendsData)
  // we need to keep track of the current search term
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='app-friends container'>
      <h1>Friends App</h1>
      {/* what does Search need? */}
      {/* it wants a callback to update the search term! */}
      <Search setSearchTerm={setSearchTerm} />

      {/* What does FriendsList need? */}
      {/* it wants all the friends data! */}
      <FriendsList friends={friends}/>
    </div>
  )
}
