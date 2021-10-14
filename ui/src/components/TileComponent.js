import React from 'react'

function TileComponent({ name, total }) {
  return (
    <div style={{ width: '180px', margin: '10px', height: '100px', border: '1px solid gray', backgroundColor: 'white', borderRadius: '5px', boxShadow: '2px 2px 4px grey' }}>
      <br />
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      <h4 style={{ textAlign: 'center' }}>{total} {name}</h4>
    </div>
  )
}

export default TileComponent;
