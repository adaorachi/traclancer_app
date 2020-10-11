import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <div key={projectCat.id} className="col-md-6 col-xl-4 p-2 my-4">
          <div className="card-body project-card bg-white p-4">
            <div className="card-icon">
              <div className={`project-icon ${colors[index]}`}>
                <Icon.Layers color="#fff" width={28} />
              </div>
            </div>
            <span className="text-muted f-16">
              {projectCat.projects.length}
              {' '}
              projects
            </span>
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <h5 className="m-0">{projectCat.title}</h5>
              </div>
            </div>
            <hr />
            <h6 className="text-muted mt-3 mb-0">
              <Link to={`/category/${projectCat.slug}`} className="view-all">View all available projects </Link>
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
            <h1>Project Categories</h1>
          </div>
          <section className="available-project-main mt-4">
            <div className="row">
              {mapProjectCat}
            </div>
          </section>
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

Projects.propTypes = {
  projectCatData: PropTypes.arrayOf(PropTypes.any).isRequired,
  onGetProjectCatData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
