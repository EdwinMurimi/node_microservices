import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import ListComponent from './ListComponent';

function SideBar() {
  return (
    <div style={{ width: '250px', height: '530px', backgroundColor: '#f7f7f7', margin: '10px 0', border: '1.5px solid #f7f7f7', padding: '10px' }}>
      <div style={{ width: '100%', height: '80px', borderBottom: '1px solid #414345', display: 'flex', alignItems: 'center' }}>
        <Link style={{ marginLeft: '20px', letterSpacing: '0.9px', textDecoration: 'none', color: '#7c7c7d', fontSize: '20px', fontWeight: 700, fontFamily: 'Source Sans Pro', margin:'auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to='#'><AppsIcon style={{ marginRight: '5px' }} />Overview</Link>
      </div>
      <ListComponent />
    </div>
  )
}

export default SideBar
