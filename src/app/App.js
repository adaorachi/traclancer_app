import React, { Suspense, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Loader from './layouts/Loader';
import Navbar from './layouts/Navbar';
import { authRoutes, authorizedRoutes } from '../config/Routes';
import ScrollTop from './ScrollTop';
import '../assets/scss/style.scss';

function App(props) {
  const [count, setCount] = useState(true);

  useEffect(() => {
    const { userData } = props;
    if (userData.hasOwnProperty('logged_in')) {
      setCount(userData.logged_in)
    }
  });

  const mapRoutes = (routes) => {
    return routes.map((route, index) => {
      return (route.component) ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props =>
            (<route.component {...props} />)
          } />
      ) : (null);
    })
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ScrollTop>
          <div className="app-body-container">
            <div className="wrapper-container">
              <Navbar />
              <main className="main-container">
                <Switch>
                  {/* {!count ? mapRoutes(authRoutes) : (<Redirect to="/dashboard" />)
                  } */}
                  {mapRoutes(authRoutes)}
                  {count ? mapRoutes(authorizedRoutes) : (<Redirect to="/login" />)
                  }
                </Switch>
              </main>
            </div>
          </div>
        </ScrollTop>
      </Suspense>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
  }
}

export default connect(mapStateToProps, null)(App);
