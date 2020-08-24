import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Checkbox } from 'antd';

export default function SignInForm() {
  return (
    <Fragment>
      <Form.Item
        className="card-input"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        className="card-input"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password

          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox className="text-muted">Remember me</Checkbox>
      </Form.Item>

      <div className="form-input-button">
        <button type="primary" type="submit" className="login-form-button form-button">
          LogIn
                    </button>
      </div>

      <div className="other-links">
        <p className="mb-0 text-muted">Forgot password? <NavLink to="/reset_password" className="form-link">Reset</NavLink></p>
        <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/signup" className="form-link">Signup</NavLink></p>
      </div>

    </Fragment>
  );
}

