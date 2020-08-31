import React, { Component } from 'react';
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Switch,
  Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Tags from '../elements/Tags';

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: '',
      files: [],
      tags: [],
    }

    this.handleReset = this.handleReset.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTag = this.handleTag.bind(this);
  }

  componentDidMount() {
    // ClassicEditor
    //   .create(document.querySelector('#project-description'), {
    //     toolbar: ['Heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link'],
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  handleTag(value) {
  this.setState({
    tags: value,
  })
  }

  formRef = React.createRef();

  handleReset = () => {
    this.formRef.current.resetFields();
  };

  handleFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    this.setState({
      files: e.fileList
    })
    return e && e.fileList;
  };

  handleSubmit() {   
    const aa = ['title', 'estimated_time', 'budget'];
    const values = {}
    aa.forEach((a) => {
      values[a] = document.getElementById(a).value
    })
    values['description'] = this.state.textarea;
    // values['attachment_url'] = this.state.files;
    values['attachment_url'] = 'files';
    values['request_detail'] = document.getElementById('request_detail').getAttribute('aria-checked');
    values['project_category_id'] = 2;
    values['owned_user_id'] = 10;

    // values['skill_set'] = this.state.tags;

    console.log(values)
  
    const url = 'http://localhost:3001/api/v1/';
    axios.post(`${url}projects`,
    values,
      { withCredentials: true }).then(res => {
        console.log(res)
      // this.setState({
      //   isLoggedOut: res.data.logged_out,
      // });
    });
  };

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
            onFinish={this.handleSubmit}>

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
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your Project Description!',
            //   },
            // ]}
            >
              <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  onInit={editor => {

                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({
                      textarea: data,
                    })
                  }}
                />

              </div>
            </Form.Item>

            <Form.Item
              className="card-input"
              name="skill_set"
            >
              <label htmlFor="skill_set">Required Skill Sets</label>
              <div className="form-group">
                <Tags handleTag={this.handleTag} />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="form-group">
                <label htmlFor="project-attachment">Attach files</label>
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.handleFile} noStyle>
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                  </Upload.Dragger>
                </Form.Item>
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
                  ]}>

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

export default CreateProject

