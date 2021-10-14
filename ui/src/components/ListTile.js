import React from 'react'
import { Link } from 'react-router-dom';

function ListTile({ path, text, icon }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }} >
    <div style={{ borderRadius: '5px', border: 'none', width: '100%', height: '50px', display: 'flex', alignItems: 'center', margin: '8px 0', backgroundColor: '#cfd2d4' }}>
      <Link style={{ paddingLeft: '7px', letterSpacing: '0.9px', textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 500, fontFamily: 'Source Sans Pro', margin:'auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to={path}>{icon} {text}</Link>
    </div>
    </Link>
  )
}

export default ListTile
