import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel/SidebarChannel';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sever-icon">
          <img src="./logo192.png" alt="ロゴ" />
        </div>
        <div className="sever-icon">
          <img src="./logo192.png" alt="ロゴ" />
        </div>
      </div>
      <div className="sidebar__right">
        <div className="sidebar__right__top">
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebar__right__channels">
          <div className="sidebar__right__channels__header">
            <div className="sidebar-header">
              <ExpandMoreIcon />
              <h4>チャンネル一覧</h4>
            </div>
            <AddIcon className="sidebar-add-icon" />
          </div>
          <div className="sidebar-channel-list">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
