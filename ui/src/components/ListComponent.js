import React from 'react';
import ListTile from './ListTile';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';

const listers = [
  {
    text: 'Projects',
    path: '#',
    icon: <AccountTreeIcon style={{ marginRight: '5px' }} />,
  },
  {
    text: 'Tasks',
    path: '#',
    icon: <TaskIcon style={{ marginRight: '5px' }} />,
  },
  {
    text: 'Users',
    path: '#',
    icon: <PeopleIcon style={{ marginRight: '5px' }} />,
  }
]

function ListComponent() {
  return (
    <div style={{ width: '100%', marginTop: '10px ', height: 'auto' }}>
      {listers.map(({ text, path, icon }) => (
          <ListTile text={text} path={path} icon={icon} />
        ))
      }
    </div>
  )
}

export default ListComponent
