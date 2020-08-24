import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, notification } from 'antd';
import * as Icon from 'react-feather';
import { getUserData } from '../../fetchAllData/fetchUserData';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

let isSignup = true;

class Auth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      values: {
        first_name: '',
      },
      signupError: null,
      userData: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  formRef = React.createRef();

  handleSubmit(values) {
    const { location } = this.props;
    if (location.pathname === '/login') {
      isSignup = false;
    }
    this.props.onGetUserData(values)
    this.setState({
      userData: this.props.userData
    })
  };

  handleReset = () => {
    this.formRef.current.resetFields();
  };

  componentDidUpdate(prevProp) {
    const { history, location, userData } = this.props;
    if (prevProp.userData !== userData) {
      if (userData.status === 'created' && userData.logged_in) {
        this.handleReset()
        notification.success({
          message: (location.pathname === '/login') ? 'Login successfully, redirecting ...' : 'Registration successful, redirecting ...',
          placement: 'topRight',
        });

        setTimeout(() => {
          history.push('/dashboard');
        }, 1000)
      } else if (userData.status === 401 && !userData.logged_in) {
        notification.error({
          message: userData.error.map((err) => (<div>{err}.</div>)),
          placement: 'topRight',
        });
      } else {
        notification.error({
          message: `Authentication failed!`,
          placement: 'topRight',
        });
      }
    }
  }

  render() {
    const { location } = this.props;
    let renderForm;
    let cardHeader;
    if (location.pathname === '/login') {
      renderForm = <SignInForm />;
      cardHeader = (
        <Fragment>
          <span className="feather-icon">
            <Icon.Unlock color="#49dcc8" size={28} />
          </span>
          <h3 className="mb-4">Login</h3>
        </Fragment>
      )
    } else if (location.pathname === '/signup') {
      renderForm = <SignUpForm />;
      cardHeader = (
        <Fragment>
          <span className="feather-icon">
            <Icon.User color="#49dcc8" size={28} />
          </span>
          <h3 className="mb-4">Sign Up</h3>

          <div className="other-links">
            <p className="mb-0 text-muted">Already have an account? <NavLink to="/login" className="form-link">Login</NavLink></p>
          </div>
        </Fragment>
      )
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
              <div className="card-body text-center">
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

const mapStateToProps = state => {
  return {
    userData: state.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetUserData: userData => {
      dispatch(getUserData(userData, isSignup))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
