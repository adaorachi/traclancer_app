import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-feather';
import { Menu, Dropdown } from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, AlignLeftOutlined,CloseOutlined } from '@ant-design/icons';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userDetails: {},
      isLoggedOut: false,
    }

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
  }

  componentDidMount() {
    let { status, logged_in, user } = this.props.userData;
    if (logged_in) {
      this.setState({
        userDetails: user,
      })
    }
  }

  handleLogOut() {
    const url = "http://localhost:3001/api/v1/";
    axios.delete(`${url}logout`,
      { withCredentials: true }).then(res => {
        this.setState({
          isLoggedOut: res.data.logged_out,
        })
      })
      if (this.state.isLoggedOut) {
        this.props.history.push("/login")
      }
  }

  handleCloseDrawer(e) {
    console.log(e.target)
    document.querySelector('.nav-drawer').classList.toggle('close');
    document.querySelector('.main-page').classList.toggle('open');
    document.querySelector('.close-drawer').classList.toggle('close');
    document.querySelector('.open-drawer').classList.toggle('open');
  }

  render() {
    
    const { profile_image, first_name, last_name } = this.state.userDetails;

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <div className="navbar-brand-image">
              <div className="logo">
                <Icon.TrendingUp color="#fff" width={18} />
              </div>
              <span className="logo-text">TracLancer</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="nav-link toggle-button" type="button" onClick={(e) => this.handleCloseDrawer(e)}>
                  <AlignLeftOutlined className='close-drawer' />
                  <CloseOutlined className="d-none open-drawer" />
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span className="navbar-text px-3">
              <div className="avatar">
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link d-flex align-items-center" onClick={e => e.preventDefault()}>
                    <div>
                      <img src={profile_image} className="rounded" width="40" />
                      <span className="mx-2 user-name">{`${first_name} ${last_name}`}</span>
                    </div>
                    <Icon.ChevronDown width={12} color="#404e67" />
                  </a>
                </Dropdown>
              </div>
            </span>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    userData: state.userData,
  }
}

export default connect(mapStateToProps, null)(Navbar);