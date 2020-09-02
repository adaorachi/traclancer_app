/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import {
  Form, Input, Checkbox, Select,
} from 'antd';

export default function SignUpForm() {
  return (
    <div className="sign-up-form">
      <Form.Item
        className="card-input"
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your First name!',
          },
        ]}
      >
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item
        className="card-input"
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your Last name!',
          },
        ]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item
        className="card-input"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
          type="email"
          placeholder="Email"
        />
      </Form.Item>

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
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Type of user"
        >
          <Select.Option value="freelancer">Freelancer</Select.Option>
          <Select.Option value="client">Client</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        className="card-input"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        className="card-input"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) },
        ]}
      >
        <Checkbox className="text-muted">
          I have read the
          {' '}
          <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>

      <div className="form-input-button">
        <button type="submit" className="login-form-button form-button">
          SignUp
        </button>
      </div>
    </div>

  );
}
