import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, Button, Form, Input, Checkbox, InputNumber,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CreateProjectStage from '../../forms/CreateProjectStage';
import { getProjectStages, createProjectStage } from '../../../fetchAllData/fetchProjectData';

class ProjectStages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      visible: false,
      data: {},
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    const { match, onGetProjectStages } = this.props;
    const id = match.params.stage_id;
    onGetProjectStages(id);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  render() {
    const onFinish = values => {
      this.handleOk();
      const { match } = this.props;
      const id = match.params.stage_id;
      const obj = { ...values };
      obj.share = values.share === undefined ? false : values.share;
      obj.claimed_project_id = id;
      createProjectStage(obj);
      console.log('Success:', obj);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const { visible, loading } = this.state;

    const { TextArea } = Input;

    return (
      <>
        <Button
          className="add-button"
          onClick={this.showModal}
        >
          <PlusOutlined />
          {' '}
        </Button>

        <Modal
          title="Create a Project Stage"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >

            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your stage name!',
                },
              ]}
            >
              <Input placeholder="Stage Name" />
            </Form.Item>

            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input your description!',
                },
              ]}
            >
              <TextArea placeholder="Stage Description" />
            </Form.Item>

            <Form.Item
              name="estimated_time"
              rules={[
                {
                  required: true,
                  message: 'Please input your estimated time!',
                },
              ]}
            >
              <InputNumber placeholder="Estimated Hours" />
            </Form.Item>

            <Form.Item
              name="rate"
              rules={[
                {
                  required: true,
                  message: 'Please input your hourly rate!',
                },
              ]}
            >
              <InputNumber placeholder="Hourly Rate" />
            </Form.Item>

            <Form.Item name="share" valuePropName="checked">
              <Checkbox>Share info with client</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" loading={loading} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleCancel}>
                Return
              </Button>
            </Form.Item>
          </Form>

        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  projectStageData: state.projectStageData,
});

const mapDispatchToProps = dispatch => ({
  onGetProjectStages: id => {
    dispatch(getProjectStages(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStages);
