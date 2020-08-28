import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProjectCatData } from '../../../fetchAllData/fetchProjectCatData';
import * as Icon from 'react-feather';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project_cat: {}
    }
  }

  componentDidMount(prevProps) {
    this.props.onGetProjectCatData()
    // if (prevProps.projectCatData !== this.state.projectCatData) {
    //   this.setState({
    //     project_cat: this.props.projectCatData
    //   })
    // }
  }

  render() {
    const { projectCatData } = this.props;
    console.log(this.props)
    let mapProjectCat = '';
    if (projectCatData.length > 0) {
      
    }
    // if (projectCatData.length > 0) {
    //   console.log(projectCatData)

    //   mapProjectCat = projectCatData.map((projectCat) => (
    //     <div key={projectCat.project_category.slug} className="category-card">
    //       <div className="card-header">
    //         <div className="project-icon">
    //           <Icon.Calendar color="#fff" width={28} />
    //         </div>
    //       </div>
    //       <div className="card-body">
    //         <div className="project-no">
    //           <span>Projects</span>
    //           <span>{projectCat.unclaimed_project_no}</span>
    //         </div>
    //         <div className="category-title">
    //           <h4>{projectCat.project_category.title}</h4>
    //         </div>
    //       </div>
    //       <div className="card-footer">
    //         <Link to={projectCat.project_category.slug}>
    //           View All
    //         </Link>
    //       </div>
    //     </div>
    //   ))
    // }
    // console.log(this.state.projectCatData)

    return (
      <div className="project-container page-container">
        <div className="available-projects project-category">
          <div className="header-content bg-white p-3 mb-4">
            <h4>Project Categories</h4>
          </div>
          <div className="available-project-main mt-4">
            <div className="row">
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-pink">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-blue">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-orange">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-green">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-grey">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-2 my-4">
                <div className="card-body bg-white p-4">
                  <div className="card-icon">
                    <div className="project-icon bg-dark-blue">
                      <Icon.Calendar color="#fff" width={28} />
                    </div>
                  </div>
                  <span className="text-muted f-16">15 projects</span>
                  <div className="row align-items-center justify-content-center">
                    <div className="col">
                      <h5 className="m-0">Web design</h5>
                    </div>
                  </div>
                  <hr />
                  <h6 className="text-muted mt-3 mb-0">
                    <Link to="/" className="view-all">View all available projects </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    projectCatData: state.projectCatData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProjectCatData: () => {
      dispatch(getProjectCatData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
