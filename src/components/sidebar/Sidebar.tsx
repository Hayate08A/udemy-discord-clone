import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel/SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

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
          <div className="sidebar__right__footer">
            <div className="sidebar__right__footer__account">
              <img src="./icon.png" alt="" />
              <div className="sidebar__right__footer__account__name">
                <h4>userName</h4>
                <span>#ID</span>
              </div>
            </div>
            <div className="sidebar__right__footer__account__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
