import React from 'react';
import avatar from '../../../assets/images/user/avatar-2.jpg';

export default function MyProjects() {
  return (
    <div className="avaliable-page-container page-container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header bg-info text-white">
                  <div className="row">
                    <div className="col-md-10">
                      <h4>Responsive web - local ecommerce market place </h4>
                      <span>use class <code>table-primary, table-*</code> inside thead tr element</span>
                    </div>
                    <h5 className="col-md-2">Budget
                      <br />
                      $2,000
                    </h5>
                  </div>
                </div>

                <div className="card-body">
                  <div className="project-details">
                    <div className="project-body">
                      <p className="">Hi, we are looking to build a local market place. includes maps, payment gateway, logins authentication, profiles, private messages, bidding/offers and comments. backend control dashboard. followed by an app for mobile devices.
                  </p>
                      <p>Developer must:</p>
                      <p>Give us code after project completion.</p>
                      <p>Be able to do maintenance on later agreed period.</p>
                      <p>Sign a NDA agreement.</p>
                      <p>
                        I'm interested in a reliable and professional developer that has attention to detail, is hard working and confident in their work as well as being prepared for anything and the desire to see this forum thrive.

                        I would love for you to review the website nulled . to as my plan is for this forum too have the same features and similar design.

                        I expect to have you ready to fix any bugs that occur after its launch and available to add any features in the long run (all paid) (my goal will to have you as my only developer)

                        MUST at least live in America, UK, Australia, leave a some what detailed reply so i can assure your not a bot.

                        Thank you and looking forward to working with you.
                  </p>
                      <div className="other-info">
                        <p className="font-weight-bold">
                          About the Client:
                      </p>
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
                            <button type="button" className="btn btn-info btn-sm">Claim Project</button>
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
        <div className="col-md-4">
          <div className="card-body">
           
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-info lead">Similar Projects</li>
              <li className="list-group-item">Responsive web - local ecommerce market place</li>
              <li className="list-group-item">Responsive web - local ecommerce market place</li>
              <li className="list-group-item">Responsive web - local ecommerce market place</li>
              <li className="list-group-item">Responsive web - local ecommerce market place</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
