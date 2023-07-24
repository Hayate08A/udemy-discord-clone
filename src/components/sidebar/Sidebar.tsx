import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
      </div>
    </div>
  );
};

export default Sidebar;
