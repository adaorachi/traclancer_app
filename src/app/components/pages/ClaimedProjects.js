import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import {
  Modal, Progress, Popover, message, Menu, Dropdown, Tabs, Form, Select,
} from 'antd';
import { ExclamationCircleOutlined, PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import Timer from 'react-compound-timer';
import { getAllUserClaimedProject, createClaimedProjectStats } from '../../../fetchAllData/fetchProjectData';
import RecordClaimedProjectTime from '../../forms/RecordClaimedProjectTime';

class ClaimedProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      confirmLoading: false,
      mapSelect: [],
      sentData: false,
      stageSelect: null,
    };

    this.handlePlayTimer = this.handlePlayTimer.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    const { onGetUserClaimedProject } = this.props;
    onGetUserClaimedProject();
  }

  showModal(mapSelect) {
    this.setState({
      visible: true,
      mapSelect,
    });
  }

  handleOk() {
    this.setState({
      confirmLoading: true,
      sentData: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  handleSelectChange(value) {
    this.setState({
      stageSelect: value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handlePlayTimer(e, action, stages, id) {
    const key = 'updatable';

    // var e = document.getElementById("elementId");
    // var value = e.options[e.selectedIndex].value;

    const openMessage = (message1, message2) => {
      message.loading({ content: message1, key });
      setTimeout(() => {
        message.info({ content: message2, key, duration: 2 });
      }, 1000);
    };
    if (e.target.classList.contains(`resume-timer-${id}`)) {
      const claimedData = e.target.getAttribute('claimed-data');
      const obj = {
        claimed_project: parseInt(claimedData, 10),
        record_time: 0,
      };
      action();
      document.querySelector(`.resume-timer-${id}`).style.display = 'none';
      document.querySelector(`.pause-timer-${id}`).style.display = 'block';
      openMessage('Timer starting ...', 'Started!');
      // const claimed = createClaimedProjectStats(obj);
      // if (claimed.hasOwnProperty('data')) {

      // } else {
      //   openMessage('Error stating timer ...', 'Timer Aborted!');
      // }
    } else if (e.target.classList.contains(`pause-timer-${id}`)) {
      // this.showModal(stages);
      const mapStages = stages.map(sta => (
        <Select.Option value={sta.id} key={sta.id}>{sta.title}</Select.Option>
      ));

      action();
      document.querySelector(`.resume-timer-${id}`).style.display = 'block';
      document.querySelector(`.pause-timer-${id}`).style.display = 'none';
      openMessage('Timer pausing ...', 'Paused!');
    }
  }

  render() {
    let aa;
    function onChange(value) {
      aa = value;
      console.log(`selected ${value}`);
      return value;
    }

    const { visible, confirmLoading } = this.state;

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
              <h5 className="m-0">Web Design of my website</h5>
              <span>Client: MaryAnn Chuka</span>
            </div>
            <div className="card-body py-2 px-3">
              <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                <div className="d-flex p-2 p-md-0 order-3 order-md-1">
                  <div className="text-center">
                    <button type="button" className="button-info">
                      <Link to="/" className="text-white">View Project</Link>
                    </button>
                  </div>
                  <div className="text-center">
                    <button type="button" className="button-primary">
                      <Link to={`/claimed_projects/${attributes.id}`} className="text-white">View Stages</Link>
                    </button>
                  </div>
                </div>

                <div className="estimated-time time-content d-flex flex-column p-2 p-md-0 order-2 order-md-2">
                  <span>Allocated Time: 20:00:00</span>
                  <span>
                    Spent Time: 04:30:00
                    {' '}
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <span className="badge badge-pill badge-info">View</span>
                    </Dropdown>
                  </span>
                </div>
                <div className="p-2 p-md-0 order-1 order-md-3">
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
                          <button type="button" claimed-data={attributes.id} className={`pause-timer pause-timer-${projects.id}`} onClick={e => this.handlePlayTimer(e, pause, project_stages, projects.id)}>
                            <PauseCircleFilled style={{ fontSize: '2rem' }} />
                          </button>
                          <button type="button" className={`resume-timer resume-timer-${projects.id}`} claimed-data={attributes.id} onClick={e => this.handlePlayTimer(e, resume, [], projects.id)}>
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
          <Modal
            title="What project Stage did you work on?"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <Select
              style={{ width: 200 }}
              defaultValue="Select Stage"
              onChange={onChange}
            >
              {/* {mapStages} */}
            </Select>
          </Modal>
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

          <div className="card m-0 rounded">
            <div className="card-body card-container p-0">
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
