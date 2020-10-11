/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { getProjectDetail } from '../../../fetchAllData/fetchProjectData';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { match, onGetProjectDetailData } = this.props;
    const id = match.params.project_id;
    onGetProjectDetailData(id);
  }

  render() {
    const { projectDetailData } = this.props;
    let mapProjectDetailsData;
    if (projectDetailData.length > 0) {
      const { project } = projectDetailData[0][0];
      const { owned_user } = projectDetailData[0][1];
      mapProjectDetailsData = (
        <div className="card">
          <div className="card-header bg-info text-white">
            <div className="row">
              <div className="col-md-8">
                <h1>{project.title}</h1>
              </div>
              <h5 className="col-md-4">
                Budget
                $
                {project.budget}
              </h5>
            </div>
          </div>

          <div className="card-body">
            <div className="project-details">
              <div className="project-body">
                <p className="">

                  {renderHTML(project.description)}

                </p>
                <div className="other-info">
                  <p className="font-weight-bold">
                    About the Client:
                  </p>
                  <div className="row flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <div className="d-flex no-block align-items-center">
                        <div className="mr-3">
                          <img src={owned_user.profile_image} alt="user" className="rounded-circle" width="45" height="45" />
                        </div>
                        <div className="client">
                          <h5 className="text-dark mb-0 font-16 font-weight-medium">{`${owned_user.first_name} ${owned_user.last_name}`}</h5>
                          <small>{owned_user.email}</small>
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
      );
    }
    return (
      <section className="avaliable-page-container page-container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-12">
                {mapProjectDetailsData}
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
      </section>
    );
  }
}

const mapStateToProps = state => ({
  projectDetailData: state.projectDetailData,
});

const mapDispatchToProps = dispatch => ({
  onGetProjectDetailData: catSlug => {
    dispatch(getProjectDetail(catSlug));
  },
});

ProjectDetail.propTypes = {
  projectDetailData: PropTypes.arrayOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  onGetProjectDetailData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
