/* eslint-disable react/prefer-stateless-function */
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { notification } from 'antd';
import PropTypes from 'prop-types';
import Loader from './layouts/Loader';
import Navbar from './layouts/Navbar';
import Drawer from './layouts/Drawer';
import { authRoutes, authorizedRoutes } from '../config/Routes';
import ScrollTop from './ScrollTop';
import 'reset-css';
import '../assets/scss/style.scss';

import Dashboard from './components/pages/Dashboard';
import Auth from './auth/Auth';
import Projects from './components/pages/Projects';
import AvailableProjects from './components/single_components/AvailableProjects';
import ProjectDetail from './components/single_components/ProjectDetail';
import CreateProject from './forms/CreateProject';
import ClaimedProjects from './components/pages/ClaimedProjects';
import ProjectStages from './components/single_components/ProjectStages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevState) {
    const { userData, history } = this.props.userData;

    // console.log(userData.logged_in, this.props.userData.logged_in, 'data1');
    // if (userData.logged_in !== this.props.userData.logged_in && this.props.userData.logged_in) {
    //   this.setState({
    //     isLoggedIn: this.props.userData.logged_in,
    //   });
    // }
  }

  render() {
    const mapRoutes = routes => routes.map(route => ((route.component) ? (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        name={route.name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => (<route.component {...props} />)}
      />
    ) : (null)));

    const { isLoggedIn } = this.state;
    const { userData, history } = this.props;

    const token = localStorage.getItem('token');
    const authPathRegex = /(\/login)|(\/signup)/i;
    const currPath = history.location.pathname;
    const isAuthed = token && authPathRegex.test(currPath);

    let nav;
    console.log(userData.logged_in);

    const renderRedirect = () => {
      if (localStorage.getItem('token') === null) {
        // history.push('/login');
        return <Redirect to="/login" />;
      }
      if (localStorage.getItem('token') === null && !authPathRegex.test(currPath)) {
        // history.push(currPath);
        return <Redirect to={currPath} />;
      }
      if (localStorage.getItem('token') !== null && authPathRegex.test(currPath)) {
        // history.push('/login');
        return <Redirect to="/" />;
      }
    };

    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ScrollTop>
            {renderRedirect()}
            <div className="app-body-container">
              <Navbar userDetails={userData.user} />
              <Switch>
                {mapRoutes(authRoutes)}
                {/* <Route exact path="/login" component={Auth} />
                <Route exact path="/signup" component={Auth} /> */}
              </Switch>
              <Switch>
                <div className="wrapper-container">

                  <main className="main-container">
                    <div className="nav-drawer">
                      <Drawer />
                    </div>
                    <div className="main-page">
                      {/* <Route exact path="/" component={Dashboard} />
                      <Route exact path="/create_project" component={CreateProject} /> */}

                      {mapRoutes(authorizedRoutes)}
                    </div>
                  </main>
                </div>
              </Switch>
            </div>
          </ScrollTop>
        </Suspense>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps, null)(App);
