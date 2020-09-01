import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, notification } from 'antd';
import * as Icon from 'react-feather';
import { getUserData } from '../../fetchAllData/fetchUserData';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

let isSignup = true;

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.formRef = this.formRef.bind(this);
  }

  componentDidUpdate(prevProp) {
    const { history, location, userData } = this.props;
    if (prevProp.userData !== userData) {
      if (userData.status === 'created' && userData.logged_in) {
        notification.success({
          message: (location.pathname === '/login') ? 'Login successfully, redirecting ...' : 'Registration successful, redirecting ...',
          placement: 'topRight',
        });

        history.push('/');
      } else if (userData.status === 401 && !userData.logged_in) {
        notification.error({
          message: userData.error.map(err => (
            <div key={err}>
              {err}
              .
            </div>
          )),
          placement: 'topRight',
        });
      } else {
        notification.error({
          message: 'Authentication failed!',
          placement: 'topRight',
        });
      }
    }
  }

  handleSubmit(values) {
    const { location, onGetUserData } = this.props;
    if (location.pathname === '/login') {
      isSignup = false;
    }
    onGetUserData(values);
  }

  render() {
    // const handleReset = () => {
    //   this.formRef.current.resetFields();
    // };

    const { location } = this.props;
    let renderForm;
    let cardHeader;
    if (location.pathname === '/login') {
      renderForm = <SignInForm />;
      cardHeader = (
        <>
          <span className="feather-icon">
            <Icon.Unlock color="#49dcc8" size={28} />
          </span>
          <h3 className="mb-4">Login</h3>
        </>
      );
    } else if (location.pathname === '/signup') {
      renderForm = <SignUpForm />;
      cardHeader = (
        <>
          <span className="feather-icon">
            <Icon.User color="#49dcc8" size={28} />
          </span>
          <h3 className="mb-4">Sign Up</h3>

          <div className="other-links">
            <p className="mb-0 text-muted">
              Already have an account?
              <NavLink to="/login" className="form-link">Login</NavLink>
            </p>
          </div>
        </>
      );
    }

    return (
      <div>
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-header">
                  {cardHeader}
                </div>
                <Form
                  ref={this.formRef}
                  name="auth-form"
                  className="auth-form"
                  initialValues={{
                    remember: false,
                  }}
                  onFinish={this.handleSubmit}
                >
                  {renderForm}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  onGetUserData: userData => {
    dispatch(getUserData(userData, isSignup));
  },
});

Auth.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  onGetUserData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
