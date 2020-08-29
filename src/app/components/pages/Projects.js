import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { getProjectCatData } from '../../../fetchAllData/fetchProjectData';
import Loader from '../../layouts/Loader';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { onGetProjectCatData } = this.props;
    onGetProjectCatData();
  }

  render() {
    const { projectCatData } = this.props;
    let mapProjectCat;
    const colors = ['bg-pink', 'bg-blue', 'bg-orange', 'bg-green', 'bg-grey', 'bg-dark-blue', 'bg-pink', 'bg-green'];
    if (projectCatData.length > 0) {
      mapProjectCat = projectCatData.map((projectCat, index) => (
        <div key={projectCat.attributes.id} className="col-md-6 col-xl-4 p-2 my-4">
          <div className="card-body bg-white p-4">
            <div className="card-icon">
              <div className={`project-icon ${colors[index]}`}>
                <Icon.Calendar color="#fff" width={28} />
              </div>
            </div>
            <span className="text-muted f-16">
              {projectCat.unclaimed_project_no}
              {' '}
              projects
            </span>
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <h5 className="m-0">{projectCat.attributes.title}</h5>
              </div>
            </div>
            <hr />
            <h6 className="text-muted mt-3 mb-0">
              <Link to={`/category/${projectCat.attributes.slug}`} className="view-all">View all available projects </Link>
            </h6>
          </div>
        </div>
      ));
    } else {
      mapProjectCat = (<Loader />);
    }

    return (
      <div className="project-container page-container">
        <div className="available-projects project-category">
          <div className="header-content bg-white p-3 mb-4">
            <h4>Project Categories</h4>
          </div>
          <div className="available-project-main mt-4">
            <div className="row">
              {mapProjectCat}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  projectCatData: state.projectCatData,
});

const mapDispatchToProps = dispatch => ({
  onGetProjectCatData: () => {
    dispatch(getProjectCatData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
