/* eslint-disable import/named */
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from './layouts/Loader';
import Navbar from './layouts/Navbar';
import Drawer from './layouts/Drawer';
import { authRoutes, authorizedRoutes } from '../config/Routes';
import ScrollTop from './ScrollTop';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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

    const { userData, history } = this.props;

    const authPathRegex = /(\/login)|(\/signup)/i;
    const currPath = history.location.pathname;
    // const token = localStorage.getItem('token');
    // const isAuthed = token && authPathRegex.test(currPath);

    // eslint-disable-next-line consistent-return
    const renderRedirect = () => {
      if (localStorage.getItem('token') === null) {
        return <Redirect to="/login" />;
      }
      if (localStorage.getItem('token') === null && !authPathRegex.test(currPath)) {
        return <Redirect to={currPath} />;
      }
      if (localStorage.getItem('token') !== null && authPathRegex.test(currPath)) {
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
              </Switch>
              <Switch>
                <div className="wrapper-container">

                  <main className="main-container">
                    <div className="nav-drawer">
                      <Drawer />
                    </div>
                    <div className="main-page">
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps, null)(App);
