import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
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
import CreateProject from './forms/CreateProject';

const App = props => {
  const mapRoutes = routes => routes.map(route => ((route.component) ? (
    <Route
      key={route}
      path={route.path}
      exact={route.exact}
      name={route.name}
      render={props => (<route.component {...props} />)}
    />
  ) : (null)));

  // let data;

  const { userData } = props;

  // const mapAuthorized = () => (

  // );
  // const data = () => {
  //   if (userData.logged_in) {
  //     const { user } = userData;
  //     console.log(userData.logged_in)
  //     return (

  //     );
  //   }
  //   // props.history.push('/login');
  //   return (

  //   );
  // };

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ScrollTop>
          <div className="app-body-container">
            <Switch>
              {mapRoutes(authRoutes)}
              {/* <Route exact path="/login" component={Auth} />
                <Route exact path="/signup" component={Auth} /> */}
            </Switch>
            {userData.logged_in ? (
              <Switch>
                <div className="wrapper-container">
                  <Navbar userDetails={userData.user} />
                  <main className="main-container">
                    <div className="nav-drawer">
                      <Drawer />
                    </div>
                    <div className="main-page">

                      {mapRoutes(authorizedRoutes)}
                      {/* <Route exact path="/" component={Dashboard} />
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/create_project" component={CreateProject} /> */}
                      {/* <Route path="/artists/:artist_id" component={ArtistPlayList} /> */}
                    </div>
                  </main>
                </div>
              </Switch>
            ) : (
              ''
              // props.history.push('/login')
            )}
          </div>
        </ScrollTop>
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps, null)(App);
