/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Switch,
  notification,
} from 'antd';

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: '',
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
  }

  handleReset() {
    this.formRef.current.resetFields();
  }

  handleSubmit() {
    const { history } = this.props;
    const { textarea } = this.state;
    const aa = ['title', 'estimated_time', 'budget'];
    const values = {};
    aa.forEach(a => {
      values[a] = document.getElementById(a).value;
    });
    values.description = textarea;
    values.request_detail = document.getElementById('request_detail').getAttribute('aria-checked');
    values.project_category_id = 2;
    values.owned_user_id = 10;

    const url = 'https://ancient-ocean-05868.herokuapp.com/api/v1/';
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (token) {
      axios.post(`${url}projects`,
        values,
        { headers }).then(res => {
        notification.success({
          message: 'Project sucessfully created!',
          placement: 'topRight',
        });
        history.push('/');
        // eslint-disable-next-line no-console
        console.log(res);
      });
    }
  }

  render() {
    return (
      <div className="create-form-container page-container">
        <div className="header-content bg-white p-3">
          <h4>Create a Project</h4>
        </div>

        <div className="form form page-form width-form">
          <Form
            ref={this.formRef}
            name="create-project-form"
            className="create-project-form"
            initialValues={{
              remember: false,
            }}
            onFinish={this.handleSubmit}
          >

            <Form.Item
              className="card-input"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your Project Title!',
                },
              ]}
            >
              <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <Input id="title" />
              </div>

            </Form.Item>

            <Form.Item
              className="card-input"
              name="description"
            >
              <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({
                      textarea: data,
                    });
                  }}
                />

              </div>
            </Form.Item>

            <div className="row">
              <div className="col-md-4">
                <Form.Item
                  className="card-input"
                  name="budget"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Project Budget!',
                    },
                  ]}
                >

                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <InputNumber id="budget" placeholder="$100" />
                  </div>
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item
                  className="card-input"
                  name="estimated_time"
                  rules={[
                    {
                      message: 'Please input your Estimated Deadline!',
                    },
                  ]}
                >
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="project-time">Estimated Time</label>
                    <DatePicker id="estimated_time" />
                  </div>
                </Form.Item>

              </div>
              <div className="col-md-4">
                <Form.Item
                  className="card-input"
                  name="request_detail"
                >
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="request_detail">Request Work Details</label>
                    <Switch id="request_detail" className="w-20" />
                  </div>
                </Form.Item>
              </div>
            </div>

            <div className="form-input-button">
              <button type="submit" className="login-form-button form-button">
                Create Project
              </button>
            </div>

          </Form>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CreateProject;
