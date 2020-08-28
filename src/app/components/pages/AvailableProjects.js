import React from 'react';
import avatar from '../../../assets/images/user/avatar-2.jpg';

export default function AvailableProjects() {
  return (
    <div className="available-project-container page-container">

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5>Table Header Styling</h5>
              <span>use class <code>table-primary, table-*</code> inside thead tr element</span>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <h4 className="card-title">Avaliable Projects</h4>
                <div className="ml-auto">
                  <div className="dropdown sub-dropdown">
                    <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                      <a className="dropdown-item" href="#">Insert</a>
                      <a className="dropdown-item" href="#">Update</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start ">
                  <div className="d-flex flex-column flex-md-row w-100 justify-content-between align-items-center mb-2">
                    <a href="#">
                      <h5 className="lead heading-title">Responsive web - local ecommerce market place </h5>
                    </a>
                    <span className="budget lead">$2,000</span>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Hi, we are looking to build a local market place. includes maps, payment gateway, logins authentication, profiles, private messages, bidding/offers and comments. backend control dashboard. followed by an app for mobile devices. Developer must: Give us code after project completion. Be able to do...
                  </p>
                  <div className="footer">
                    <div className="row flex-column flex-md-row">
                      <div className="col-12 col-md-6">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img src={avatar} alt="user" className="rounded-circle" width="45" height="45" />
                          </div>
                          <div className="client">
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna Gover</h5>
                            <small>hgover@gmail.com</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-left text-md-right mt-2 mt-md-0">
                        <button type="button" class="btn btn-info btn-sm">Claim</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex flex-column flex-md-row w-100 justify-content-between align-items-center mb-2">
                    <a href="#">
                      <h5 className="lead heading-title">Responsive web - local ecommerce market place </h5>
                    </a>
                    <span className="budget lead">$2,000</span>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Hi, we are looking to build a local market place. includes maps, payment gateway, logins authentication, profiles, private messages, bidding/offers and comments. backend control dashboard. followed by an app for mobile devices. Developer must: Give us code after project completion. Be able to do...
                  </p>
                  <div className="footer">
                    <div className="row flex-column flex-md-row">
                      <div className="col-12 col-md-6">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img src={avatar} alt="user" className="rounded-circle" width="45" height="45" />
                          </div>
                          <div className="client">
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna Gover</h5>
                            <small>hgover@gmail.com</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-left text-md-right mt-2 mt-md-0">
                        <button type="button" class="btn btn-info btn-sm">Claim</button>
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
  )
}
