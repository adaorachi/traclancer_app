/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import { Menu, Dropdown } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { history } = this.props;
    const url = 'http://localhost:3001/api/v1/';
    axios.delete(`${url}logout`,
      { withCredentials: true }).then(res => {
      if (res.data.logged_out) {
        localStorage.removeItem('token');
        history.push('/login');
      }
    });
  }

  render() {
    const handleCloseDrawer = () => {
      document.querySelector('.nav-drawer').classList.toggle('close-d');
      document.querySelector('.main-page').classList.toggle('open-d');
      document.querySelector('.toggle-button').classList.toggle('close-d');
    };

    const { userDetails, history } = this.props;
    const authPathRegex = /(\/login)|(\/signup)/i;
    const currPath = history.location.pathname;
    let navbar;
    let userD;

    if (userDetails) {
      const { profile_image, first_name, last_name } = userDetails;
      userD = (
        <div>
          <img src={profile_image} className="rounded" width="40" alt="avatar" />
          <span className="mx-2 user-name">{`${first_name} ${last_name}`}</span>
        </div>
      );
    }

    const profileMenu = (
      <Menu>
        <Menu.Item icon={<PieChartOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item icon={<DesktopOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item icon={<ContainerOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<DesktopOutlined />} onClick={this.handleLogOut}>
          Logout
        </Menu.Item>
      </Menu>
    );

    if (!authPathRegex.test(currPath)) {
      navbar = (
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <div className="navbar-brand-image">
              <div className="logo">
                <Icon.TrendingUp color="#fff" width={18} />
              </div>
              <span className="logo-text">TracLancer</span>
            </div>
          </a>

          <button className="nav-link toggle-button" type="button" onClick={e => handleCloseDrawer(e)}>
            <div>
              <div className="bar top-bar" />
              <div className="bar middle-bar" />
              <div className="bar bottom-bar" />
            </div>
          </button>

          <div className="navbar-collapse d-flex bg-white">
            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Settings</a>
              </li>
            </ul>
            <span className="navbar-text px-3">
              <div className="avatar">
                <Dropdown overlay={profileMenu} trigger={['click']}>
                  <button type="button" className="ant-dropdown-link d-flex align-items-center button-unhighlight" onClick={e => e.preventDefault()}>
                    {userD}
                    <Icon.ChevronDown width={12} color="#404e67" />
                  </button>
                </Dropdown>
              </div>
            </span>
          </div>
        </nav>
      );
    } else {
      navbar = '';
    }

    return (
      <div className="navbar-wrapper">
        {navbar}
      </div>
    );
  }
}

Navbar.propTypes = {
  userDetails: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default withRouter(Navbar);
