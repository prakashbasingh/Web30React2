import React, { useState } from 'react'
import friendsData from '../dummy-data/friends'


export default function App({ }) {
  const [friends, setFriends] = useState(friendsData)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='app-friends'>
      
    </div>
  )
}
