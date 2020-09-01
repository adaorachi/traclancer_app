import React from 'react';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import Chart from '../../forms/Chart';

const Dashboard = props => {
  const { userData } = props;

  const mapObj = [
    {
      color: 'bg-orange',
      heading: 'New Clients',
      number: '1896',
      icon: <Icon.UserPlus />,
    },
    {
      color: 'bg-pink',
      heading: 'Earnings',
      number: '$10,896',
      icon: <Icon.Award />,
    },
    {
      color: 'bg-green',
      heading: 'New Projects',
      number: '13',
      icon: <Icon.Bell />,
    },
    {
      color: 'bg-blue',
      heading: 'Total Projects',
      number: '140',
      icon: <Icon.Layers />,
    },
  ];

  const mapArray = mapObj.map(arr => (
    <div key={arr.heading} className="col-md-6 col-xl-3">
      <div className={`card mb-3 widget-content ${arr.color} rounded`}>
        <div className="widget-content-wrapper text-white p-3">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="widget-content-left">
                <div className="widget-heading widget-numbers font-weight-bold text-white ">{arr.number}</div>
                <div className="widget-subheading font-weight-bold">{arr.heading}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="widget-content-right">
                <div className="widget-icon text-right">
                  <span>{arr.icon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const userName = userData.logged_in ? userData.user.username : '';

  return (
    <div className="dashboard-container page-container">
      <div className="header-content p-3">
        <h4>
          Good Day
          {' '}
          {userName}
        </h4>
        <span>Your stats for today!</span>
      </div>
      <div className="dashboard-main">
        <div className="statistic">
          <div className="statistic-cards mt-4">
            <div className="row">
              {mapArray}
            </div>
          </div>

          <div className="chart">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps, null)(Dashboard);
