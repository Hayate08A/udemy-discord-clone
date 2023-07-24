import React from 'react';
import './Sidebar.scss';

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
        <div className="sidebar__top">
          <h3>discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
