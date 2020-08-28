import React from 'react';
import * as Icon from 'react-feather';
import { NavLink } from 'react-router-dom';

export default function Drawer() {
  const size = 16;
  const color = '#1dc4e9'
  const listIcons = {
    0: { icon: <Icon.Home color={color} size={size} />, link: '/dashboard' },
    1: { icon: <Icon.Calendar color={color} size={size} />, link: '/projects' },
    2: { icon: <Icon.Calendar color={color} size={size} />, link: '/available_projects' },
    3: { icon: <Icon.Calendar color={color} size={size} />, link: '/my_project' },
    4: { icon: <Icon.Calendar color={color} size={size} />, link: '/create_project' },
    5: { icon: <Icon.ShoppingBag color={color} size={size} />, link: '/project_details' },
  };
  // const exactLink = (listIcons[index].link === '/');
  return (
    <div className="nav-drawer-container">
      <ul className="navbar-drawer-links">
        {['Dashboard', 'Claimed Projects', 'Available Projects', 'My Project', 'Create Project', 'Project Details'].map((text, index) => (
          <li className="nav-list">
            <NavLink exact={listIcons[index].link === '/'} to={listIcons[index].link} className="nav-item text-primary-dim">
              <div className="nav-link">
                <div className="list-icon">{listIcons[index].icon}</div>
                <div className="list-name">
                  {text}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
