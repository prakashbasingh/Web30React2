import { v4 as uuid } from 'uuid'

export default [
  {
    id: uuid(),
    name: 'Lindsi',
    age: 23,
    likes: [
      'hiking',
      'coding'
    ],
    dislikes: [
      'netflix',
      'death metal',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Fido', type: 'Maltese' },
      { id: uuid(), name: 'Goldie', type: 'Goldfish' },
    ]
  },
  {
    id: uuid(),
    name: 'Danielle',
    age: 27,
    likes: [
      'fishing',
      'coding'
    ],
    dislikes: [
      'ironing',
      'heavy metal',
    ],
    married: false,
    pets: [
      { id: uuid(), name: 'Venus', type: 'Venus fly trap' },
      { id: uuid(), name: 'Wolfie', type: 'German Sheppard' },
    ]
  },
  {
    id: uuid(),
    name: 'Michael',
    age: 21,
    likes: [
      'exotic animals',
      'coding'
    ],
    dislikes: [
      'bird watching',
      'hiking',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Tony', type: 'Tiger' },
      { id: uuid(), name: 'Sharkie', type: 'Great White Shark' },
    ]
  },
]
