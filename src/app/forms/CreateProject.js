import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import Tags from '../elements/Tags';



class CreateProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleReset = this.handleReset.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    ClassicEditor
      .create(document.querySelector('#project-description'), {
        toolbar: ['Heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link'],
      })
      .catch(error => {
        console.log(error);
      });
  }

  formRef = React.createRef();

  handleReset = () => {
    this.formRef.current.resetFields();
  };

  handleFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
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
              name="project-title"
              rules={[
                {
                  required: true,
                  message: 'Please input your Project Title!',
                },
              ]}
            >
              <div className="form-group">
                <label for="project-title">Project Title</label>
                <Input id="project-title" />
              </div>

            </Form.Item>

            <Form.Item
              className="card-input"
              name="project-description"
              rules={[
                {
                  required: true,
                  message: 'Please input your Project Description!',
                },
              ]}
            >
              <div className="form-group">
                <label for="project-description">Project Description</label>
                <textarea id="project-description" placeholder="Write here..." />
              </div>
            </Form.Item>

            <Form.Item
              className="card-input"
              name="project-skill-set"
            >
              <label for="project-skill-set">Required Skill Sets</label>
              <div className="form-group"> 
                <Tags />
              </div>
            </Form.Item>

            <Form.Item>
              <div className="form-group">
                <label for="project-attachment">Attach files</label>
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
                  name="project-budget"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Project Budget!',
                    },
                  ]}>

                  <div className="form-group">
                    <label for="project-budget">Project Budget</label>
                    <InputNumber id="project-budget" placeholder="$100" />
                  </div>
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item >
                  <div className="form-group d-flex flex-column">
                    <label for="project-time">Estimated Deadline</label>
                    <DatePicker id="project-time" />
                  </div>
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item
                  className="card-input"
                  name="project-share"
                >
                  <div className="form-group d-flex flex-column">
                    <label for="project-share">Request Work Details</label>
                    <Switch id="project-share" className="w-20" />
                  </div>
                </Form.Item>
              </div>
            </div>

            <div className="form-input-button">
              <button type="primary btn btn-sm" type="submit" className="login-form-button form-button">
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

