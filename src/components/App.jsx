// We need the state hook
import React, { useState } from 'react'
import friendsData from '../dummy-data/friends'


export default function App({ }) {
  const [friends, setFriends] = useState(friendsData)

  return (
    <div className='friends'>
      
    </div>
  )
}
