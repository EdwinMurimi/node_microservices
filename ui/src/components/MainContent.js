import React from 'react'
import TileComponent from './TileComponent';

const tiles = [
  {
    name: 'Projects',
    total: 0
  },
  {
    name: 'Tasks',
    total: 0
  },
  {
    name: 'Users',
    total: 0
  }
]

function MainContent() {
  return (
    <div style={{ margin: '10px', width: 'calc(100% - 250px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Hello, John Doe</h1>
      <br/>
      <h4>Welcome, this is what is in your plate</h4>
      <div style={{ width: '600px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        {tiles.map(({ name, total }) => (
          <TileComponent name={name} total={total} />
        ))}
      </div>
    </div>
  )
}

export default MainContent
