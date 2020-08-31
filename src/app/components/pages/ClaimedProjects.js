import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import {
  Modal, Progress, Popover, message, Menu, Dropdown, Tabs, Form, Select,
} from 'antd';
import { ExclamationCircleOutlined, PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import Timer from 'react-compound-timer';
import { getAllUserClaimedProject } from '../../../fetchAllData/fetchProjectData';
import { fullName } from '../../utils/utils';

export class ClaimedProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handlePlayTimer = this.handlePlayTimer.bind(this);
  }

  componentDidMount() {
    const { onGetUserClaimedProject } = this.props;
    onGetUserClaimedProject();
  }

  handlePlayTimer(e, action, stages) {
    const { confirm } = Modal;
    const key = 'updatable';
    const mapStages = stages.map(sta => (
      <Select.Option value={sta.id} key={sta.title}>{sta.title}</Select.Option>
    ))
    const content = (
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your country!',
          },
        ]}
      >
        <Select placeholder="Please select a project stage">
          {mapStages}
        </Select>
      </Form.Item>
    );
    const openMessage = (message1, message2) => {
      message.loading({ content: message1, key });
      setTimeout(() => {
        message.info({ content: message2, key, duration: 2 });
      }, 1000);
    };
    this.setState({});
    if (e.target.classList.contains('resume-timer')) {
      action();
      document.querySelector('.resume-timer').style.display = 'none';
      document.querySelector('.pause-timer').style.display = 'block';
      openMessage('Timer starting ...', 'Started!');
    } else if (e.target.classList.contains('pause-timer')) {
      // <Button onClick={showPromiseConfirm}>With promise</Button>
      confirm({
        title: 'What project stage did you work on?',
        icon: <ExclamationCircleOutlined />,
        content,
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            action();
            document.querySelector('.resume-timer').style.display = 'block';
            document.querySelector('.pause-timer').style.display = 'none';
            openMessage('Timer pausing ...', 'Paused!');
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
      });
    }
  }

  render() {
    const size = 12;
    const socialIcons = [{ icon: Icon.Mail, link: '/' }, { icon: Icon.Twitter, link: '/' }, { icon: Icon.Linkedin, link: '/' }];

    const mapSocialIcon = socialIcons.map(iconProp => (
      <div className="links" key={iconProp.link}>
        <Link to={iconProp.link} className="social-link">
          <iconProp.icon color="#fff" size={size} />
        </Link>
      </div>
    ));

    const content = (
      <div>
        <p>Start Conversation</p>
        <p>View Client Profile</p>
      </div>
    );

    const menu = (
      <Menu>
        <Menu.Item>
          <h6>Today</h6>
        </Menu.Item>
        <Menu.Item>
          <span>03:20:00</span>
        </Menu.Item>
        <Menu.Item>
          <span>03:20:00</span>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">View All</Link>
        </Menu.Item>
      </Menu>
    );

    const callback = key => {
      console.log(key);
    };

    const { TabPane } = Tabs;

    const { claimedProjectData } = this.props;
    console.log(claimedProjectData[0]);

    const mapClaimedProjectData = claimedProjectData.map((proj, index) => {
      const { owned_user } = proj;
      const { projects } = proj;
      const { attributes } = proj;
      const { project_stages } = proj;
      return (
        <div key={projects.id} className="col-12">
          <div className="card project-card rounded">
            <Popover placement="leftTop" content={content} title="Title">
              <div className="other-info">
                <Icon.Award />
              </div>
            </Popover>

            <div className="card-header border-bottom py-2 px-3 text-left">
              <h6 className="m-0">Web Design of my website</h6>
              <span>Client: MaryAnn Chuka</span>
            </div>
            <div className="card-body py-2 px-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div className="text-center">
                    <button type="button" className="button-blue">
                      <Link to="/" className="text-white">View Project</Link>
                    </button>
                  </div>
                  <div className="text-center">
                    <button type="button" className="button-blue">
                      <Link to={`/claimed_projects/${attributes.id}`} className="text-white">View Stages</Link>
                    </button>
                  </div>
                </div>

                <div className="estimated-time time-content d-flex flex-column">
                  <span>Allocated Time: 20:00:00</span>
                  <span>
                    Spent Time: 04:30:00
                    {' '}
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <span className="badge badge-pill badge-info">View</span>
                    </Dropdown>
                  </span>
                </div>
                <div>
                  <Timer
                    initialTime={1000}
                    startImmediately={false}
                    onResume={() => console.log('resume')}
                    onPause={() => console.log('pause')}
                    formatValue={value => `${(value < 10 ? `0${value}` : value)}`}
                  >
                    {({
                      resume, pause,
                    }) => (
                      <div className="d-flex align-items-center">
                        <span className="time-content">
                          <Timer.Hours />
                          :
                          <Timer.Minutes />
                          :
                          <Timer.Seconds />
                        </span>
                        <div className="timer-button">
                          <button type="button" className="pause-timer" onClick={e => this.handlePlayTimer(e, pause, project_stages)}>
                            <PauseCircleFilled style={{ fontSize: '2rem' }} />
                          </button>
                          <button type="button" className="resume-timer" onClick={e => this.handlePlayTimer(e, resume, [])}>
                            <PlayCircleFilled style={{ fontSize: '2rem' }} />
                          </button>
                        </div>
                      </div>
                    )}
                  </Timer>

                </div>
              </div>
            </div>

            <div className="card-footer py-2 px-4">
              <div className="progress-bar-container">
                <Progress
                  strokeColor={{
                    '0%': '#1dc4e9',
                    '100%': '#1de9b6',
                  }}
                  percent={50.9}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="project-details-page-container page-container">
        <div className="col-12">

          <div className="header-content p-3 bg-white mb-4">
            <h5>Current Working Project</h5>
            <div className="col-12">
              <div className="card mb-0">
                <div className="card-body">
                  <h6 className="mb-4">Daily Sales</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                        {' '}
                        $249.95
                      </h3>
                    </div>
                    <div className="col-3 text-right">
                      <p className="m-b-0">50%</p>
                    </div>
                  </div>
                  <div className="progress m-t-30 shadow" style={{ height: '7px' }}>
                    <div className="progress-bar progress-c-theme button-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded">
            <div className="card-body card-container">
              <Tabs type="card" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="OnGoing Projects" key="1">
                  {mapClaimedProjectData}
                </TabPane>
                <TabPane tab="Completed Projects" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="All Projects" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  claimedProjectData: state.claimedProjectData,
});

const mapDispatchToProps = dispatch => ({
  onGetUserClaimedProject: () => {
    dispatch(getAllUserClaimedProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimedProjects);
