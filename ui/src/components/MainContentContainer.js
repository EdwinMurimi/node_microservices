import React, { useState } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';

function MainContentContainer() {
  return (
    <div style={{ display: 'flex', maxWidth: '1180px', margin: 'auto' }}>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default MainContentContainer;
