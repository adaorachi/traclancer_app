import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard-container page-container">
        <div className="header-content p-3">
          <h4>Good Morning Mcannie!</h4>
        </div>
        <div className="dashboard-main">
          <div className="statistic">
            <div className="statistic-cards mt-4">
              <div className="row">
                <div className="col-md-6 col-xl-3">
                  <div className="card mb-3 widget-content bg-orange rounded">
                    <div className="widget-content-wrapper text-white p-3">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <div className="widget-content-left">
                            <div className="widget-heading widget-numbers font-weight-bold text-white ">1896</div>
                            <div className="widget-subheading font-weight-bold">New Clients</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="widget-content-right">
                            <div className="widget-icon text-right"><span><Icon.UserPlus /></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card mb-3 widget-content bg-pink rounded">
                    <div className="widget-content-wrapper text-white p-3">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <div className="widget-content-left">
                            <div className="widget-heading widget-numbers font-weight-bold text-white ">$10,896</div>
                            <div className="widget-subheading font-weight-bold">Earnings</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="widget-content-right">
                            <div className="widget-icon text-right"><span><Icon.Award /></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card mb-3 widget-content bg-green rounded">
                    <div className="widget-content-wrapper text-white p-3">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <div className="widget-content-left">
                            <div className="widget-heading widget-numbers font-weight-bold text-white ">13</div>
                            <div className="widget-subheading font-weight-bold">New Projects</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="widget-content-right">
                            <div className="widget-icon text-right"><span><Icon.Bell /></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card mb-3 widget-content bg-blue rounded">
                    <div className="widget-content-wrapper text-white p-3">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <div className="widget-content-left">
                            <div className="widget-heading widget-numbers font-weight-bold text-white ">140</div>
                            <div className="widget-subheading font-weight-bold">Total Projects</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="widget-content-right">
                            <div className="widget-icon text-right"><span><Icon.Layers /></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
