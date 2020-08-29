import React from 'react';
import { Link } from 'react-router-dom';
// import avatar from '../../../assets/images/user/avatar-2.jpg';
import * as Icon from 'react-feather';
import CreateProjectStage from '../../forms/CreateProjectStage';

export default function ProjectDetails() {
  const avatar1 = 'https://demo.dashboardpack.com/architectui-html-free/assets/images/avatars/4.jpg';
  const size = 12;
  // const color = ['#fe9365', '#01a9ac', '#0ba360'];
  const socialIcons = [{ icon: Icon.Mail, link: '/' }, { icon: Icon.Twitter, link: '/' }, { icon: Icon.Linkedin, link: '/' }];

  const mapSocialIcon = socialIcons.map(iconProp => (
    <div className="links" key={iconProp}>
      <Link to={iconProp.link} className="social-link">
        <iconProp.icon color="#fff" size={size} />
      </Link>
    </div>
  ));

  return (
    <div className="project-details-page-container page-container">
      <div className="col-12">

        <div className="header-content bg-white p-3 mb-4">
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

        <div>

          <CreateProjectStage />

        </div>

        <div className="card rounded">
          <div className="card-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item active">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">New Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">OnGoing Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Completed Projects</a>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                <div className="row">
                  <div className="col-md-12">
                    <div className="main-card mb-3 card">

                      <div className="table-responsive">
                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                          <thead>
                            <tr>
                              <th className="text-center">Project ID</th>
                              <th className="text-center">Client</th>
                              <th className="text-center">Project</th>
                              <th className="text-center">View</th>
                              <th className="text-center">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center text-muted">#345</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper d-flex">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img width="40" className="rounded-circle" src={avatar1} alt="" />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">

                                      <div className="widget-heading">John Doe</div>
                                      <div className="widget-subheading contact d-flex">{mapSocialIcon}</div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Responsive web - local ecommerce market place</td>
                              <td className="text-center">
                                <button type="button" className="button-info">View</button>
                              </td>
                              <td className="text-center">
                                <button type="button" className="button-primary">Start</button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#347</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper d-flex">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img width="40" className="rounded-circle" src={avatar1} alt="" />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">Ruben Tillman</div>
                                      <div className="widget-subheading contact d-flex">{mapSocialIcon}</div>

                                      <a className="start-chat" href="/"><span className="badge badge-pill badge-light font-weight-light">Start Conversation?</span></a>

                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Responsive web - local ecommerce market place</td>
                              <td className="text-center">
                                <button type="button" className="button-info">View</button>
                              </td>
                              <td className="text-center">
                                <button type="button" className="button-primary">Start</button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#321</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper d-flex">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img width="40" className="rounded-circle" src={avatar1} alt="" />
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">Elliot Huber</div>
                                      <div className="widget-subheading contact d-flex">{mapSocialIcon}</div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Responsive web - local ecommerce market place</td>
                              <td className="text-center">
                                <button type="button" className="button-info">View</button>
                              </td>
                              <td className="text-center">
                                <button type="button" className="button-primary">Start</button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center text-muted">#55</td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper d-flex">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img width="40" className="rounded-circle" src={avatar1} alt="" />

                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">Vinnie Wagstaff</div>
                                      <div className="widget-subheading contact d-flex">{mapSocialIcon}</div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">Responsive web - local ecommerce market place</td>
                              <td className="text-center">
                                <button type="button" className="button-info">View</button>
                              </td>
                              <td className="text-center">
                                <button type="button" className="button-primary">Start</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="d-block text-center card-footer">
                        <button type="button" className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                        <button type="button" className="btn-wide btn btn-success">Save</button>
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
