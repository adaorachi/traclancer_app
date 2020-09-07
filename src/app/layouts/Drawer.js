import React from 'react';
import * as Icon from 'react-feather';
import { NavLink } from 'react-router-dom';

export default function Drawer() {
  const size = 16;
  const color = '#1dc4e9';
  const listIcons = {
    0: { icon: <Icon.Home color={color} size={size} />, link: '/', name: 'home' },
    1: { icon: <Icon.Layers color={color} size={size} />, link: '/claimed_projects', name: 'claimed-projects' },
    2: { icon: <Icon.File color={color} size={size} />, link: '/projects', name: 'projects' },
    3: { icon: <Icon.PlusCircle color={color} size={size} />, link: '/create_project', name: 'create-project' },
  };

  return (
    <div className="nav-drawer-container">
      <ul className="navbar-drawer-links">
        {['Dashboard', 'Claimed Projects', 'Available Project', 'Create Project'].map((text, index) => (
          <li className="nav-list" key={text}>
            <NavLink exact={listIcons[index].link === '/'} to={listIcons[index].link} className="nav-item text-primary-dim">
              <div className="nav-link">
                <div className="list-icon">{listIcons[index].icon}</div>
                <div className="list-name" data-testid={`${listIcons[index].name}-link`}>
                  {text}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
