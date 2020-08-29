/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
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
    this.state = {
      isLoggedOut: false,
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const url = 'http://localhost:3001/api/v1/';
    axios.delete(`${url}logout`,
      { withCredentials: true }).then(res => {
      this.setState({
        isLoggedOut: res.data.logged_out,
      });
    });
    
  }

  render() {
    // if (this.state.isLoggedOut) {
    //   this.props.history.push('/login');
    // }
    const handleCloseDrawer = e => {
      document.querySelector('.nav-drawer').classList.toggle('close-d');
      document.querySelector('.main-page').classList.toggle('open-d');
      document.querySelector('.toggle-button').classList.toggle('close-d');
    };

    const { profile_image, first_name, last_name } = this.props.userDetails;

    const menu = (
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

    return (
      <div className="navbar-wrapper">
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
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
            </ul>
            <span className="navbar-text px-3">
              <div className="avatar">
                <Dropdown overlay={menu} trigger={['click']}>
                  <button type="button" className="ant-dropdown-link d-flex align-items-center button-unhighlight" onClick={e => e.preventDefault()}>
                    <div>
                      <img src={profile_image} className="rounded" width="40" alt="avatar" />
                      <span className="mx-2 user-name">{`${first_name} ${last_name}`}</span>
                    </div>
                    <Icon.ChevronDown width={12} color="#404e67" />
                  </button>
                </Dropdown>
              </div>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
