/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Progress, Popover, message, Menu, Dropdown, Tabs, Modal, Select,
} from 'antd';
import { PlayCircleFilled, PauseCircleFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import Timer from 'react-compound-timer';
import {
  getAllUserClaimedProject,
  createClaimedProjectStats,
  updateClaimedProjectStats,
} from '../../../fetchAllData/fetchProjectData';
import { fullName, timeConvertToSec, secConvertToTime } from '../../utils/utils';

class ClaimedProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { onGetUserClaimedProject } = this.props;
    onGetUserClaimedProject();
  }

  render() {
    let stageSelect;
    function handleChange(value) {
      stageSelect = value;
    }
    const handlePlayTimer = (e, action, stages, id) => {
      const { confirm } = Modal;
      const key = 'updatable';
      const openMessage = (message1, message2) => {
        message.loading({ content: message1, key });
        setTimeout(() => {
          message.info({ content: message2, key, duration: 2 });
        }, 1000);
      };

      const toggleButton = (action1, action2, msg1, msg2) => {
        action();
        document.querySelector(`.resume-timer-${id}`).style.display = action1;
        document.querySelector(`.pause-timer-${id}`).style.display = action2;
        openMessage(msg1, msg2);
      };

      const options = stages.map(stage => (
        <Select.Option key={stage.id} value={stage.id}>
          {stage.title}
        </Select.Option>
      ));

      if (e.target.classList.contains(`resume-timer-${id}`)) {
        const claimedData = e.target.getAttribute('claimed-data');
        const obj = {
          claimed_project_id: parseInt(claimedData, 10),
          record_time: 0,
        };
        createClaimedProjectStats(obj);
        toggleButton('none', 'block', 'Timer starting ...', 'Started!');
      } else if (e.target.classList.contains(`pause-timer-${id}`)) {
        confirm({
          title: 'What project stage did you work on?',
          icon: <ExclamationCircleOutlined />,
          content: (
            <Select defaultValue="select" onChange={handleChange}>
              {options}
            </Select>),
          onOk() {
            const time = document.getElementById(`time-content-${id}`).textContent;
            const spentTime = document.getElementById(`spent-time-${id}`);
            spentTime.textContent = time;
            const obj = {
              project_stage: parseInt(stageSelect, 10),
              claimed_project_id: parseInt(id, 10),
              record_time: timeConvertToSec(time),
            };
            updateClaimedProjectStats(obj);
            toggleButton('block', 'none', 'Timer pausing ...', 'Paused!');
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      }
    };

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

    const callback = key => key;
    // console.log(key);

    const { TabPane } = Tabs;

    const { claimedProjectData } = this.props;
    const mapClaimedProjectData = claimedProjectData.map(proj => {
      const { owned_user } = proj;
      const { projects } = proj;
      const { attributes } = proj;
      const { project_stages } = proj;
      const { project_stats } = proj;

      let addTime = 0;
      project_stats.forEach(stat => {
        addTime += stat.record_time;
      });

      const progress = estimatedTime => {
        const estimatedT = timeConvertToSec(estimatedTime);
        const estimatedTm = Math.round((addTime / estimatedT) * 100);
        return estimatedTm;
      };

      const fontStyle = {
        fontSize: '2rem',
      };

      const header = (
        <>
          <Popover placement="leftTop" content={content} title="Title">
            <div className="other-info">
              {/* <Icon.Award /> */}
            </div>
          </Popover>

          <div className="card-header border-bottom py-2 px-3 text-left">
            <h5 className="m-0">{projects.title}</h5>
            <span>
              Client:
              {fullName(owned_user.first_name, owned_user.last_name)}
            </span>
          </div>
        </>
      );

      const bodyPartial1 = (
        <div className="d-flex p-2 p-md-0 order-3 order-md-1">
          <div className="text-center">
            <button type="button" className="button-info">
              <Link to={`/projects/${projects.id}`} className="text-white">View Project</Link>
            </button>
          </div>
          <div className="text-center">
            <button type="button" className="button-primary">
              <Link to={`/claimed_projects/${attributes.id}`} className="text-white">View Stages</Link>
            </button>
          </div>
        </div>
      );

      const bodyPartial2 = (
        <div className="estimated-time time-content d-flex flex-column p-2 p-md-0 order-2 order-md-2">
          <span>Allocated Time: 02:00:00</span>
          <span>
            Spent Time:
            {' '}
            <span id={`spent-time-${projects.id}`}>{secConvertToTime(addTime)}</span>
            {' '}
            <Dropdown overlay={menu} placement="bottomCenter">
              <span className="badge badge-pill badge-info">View</span>
            </Dropdown>
          </span>
        </div>
      );

      const bodyPartial3 = (
        <div className="p-2 p-md-0 order-1 order-md-3">
          <Timer
            initialTime={0}
            startImmediately={false}
            formatValue={value => `${(value < 10 ? `0${value}` : value)}`}
          >
            {({
              start, stop,
            }) => (
              <div className="d-flex align-items-center">
                <span className="time-content" id={`time-content-${projects.id}`}>
                  <Timer.Hours />
                  :
                  <Timer.Minutes />
                  :
                  <Timer.Seconds />
                </span>
                <div className="timer-button">
                  <button type="button" claimed-data={attributes.id} className={`pause-timer pause-timer-${projects.id}`} onClick={e => handlePlayTimer(e, stop, project_stages, projects.id)}>
                    <PauseCircleFilled style={fontStyle} />
                  </button>
                  <button type="button" className={`resume-timer resume-timer-${projects.id}`} claimed-data={attributes.id} onClick={e => handlePlayTimer(e, start, [], projects.id)}>
                    <PlayCircleFilled style={fontStyle} />
                  </button>
                </div>
              </div>
            )}
          </Timer>
        </div>
      );

      return (
        <div key={projects.id} className="col-12">
          <div className="card project-card rounded">
            {header}
            <div className="card-body py-2 px-3">
              <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                {bodyPartial1}
                {bodyPartial2}
                {bodyPartial3}
              </div>
            </div>

            <div className="card-footer py-2 px-4">
              <div className="progress-bar-container">
                <Progress
                  strokeColor={{
                    '0%': '#1dc4e9',
                    '100%': '#1de9b6',
                  }}
                  percent={progress('02:00:00')}
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

          <section className="header-content p-3 bg-white mb-4">
            <h1>Current Working Project</h1>
            <div className="col-12">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h5 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                        {' '}
                        Feature to be implemented
                      </h5>
                    </div>
                    <div className="col-3 text-right">
                      <p className="m-b-0">50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card m-0 rounded">
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
          </section>
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

ClaimedProjects.propTypes = {
  claimedProjectData: PropTypes.arrayOf(PropTypes.any).isRequired,
  onGetUserClaimedProject: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimedProjects);
