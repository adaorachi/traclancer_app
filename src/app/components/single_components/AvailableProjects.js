import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getCategoryProjectsData } from '../../../fetchAllData/fetchProjectData';
import { shortenedWord } from '../../utils/utils';

class AvailableProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { match, onGetCategoryProjectData } = this.props;
    const slug = match.params.category_slug;
    onGetCategoryProjectData(slug);
  }

  render() {
    const { catProjectsData } = this.props;
    let mapCatProjectsData;
    let title;
    if (catProjectsData.length > 0) {
      const mappedStructure = catProjectsData[0];
      title = mappedStructure[0].project_category.title;

      mapCatProjectsData = mappedStructure[1].map(proj => {
        return (
          <div key={proj.attributes.id} className="list-group-item flex-column align-items-start">
            <div className="d-flex flex-column flex-md-row w-100 justify-content-between align-items-center mb-2">
              <Link to={`/projects/${proj.attributes.id}`}>
                <h5 className="lead heading-title">{proj.attributes.title}</h5>
              </Link>
              <span className="budget lead">
                $
                {proj.attributes.amount}
              </span>
              <small>
                <Moment fromNow ago>{proj.attributes.created_at}</Moment>
                {' '}
                ago
              </small>
            </div>
            <p className="mb-1">
              {shortenedWord(proj.attributes.description, 250)}
            </p>
            <div className="footer">
              <div className="row flex-column flex-md-row">
                <div className="col-12 col-md-6">
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-3">
                      <img src={proj.owned_user.profile_image} alt="user" className="rounded-circle" width="45" height="45" />
                    </div>
                    <div className="client">
                      <h5 className="text-dark mb-0 font-16 font-weight-medium">{`${proj.owned_user.first_name} ${proj.owned_user.last_name}`}</h5>
                      <small>{proj.owned_user.email}</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-left text-md-right mt-2 mt-md-0">
                  <button type="button" className="btn btn-info btn-sm">Claim</button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="available-project-container page-container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex flex-column">
                    <h5>Avaliable Projects</h5>
                    <span>
                      {title}
                    </span>
                  </div>
                  <div className="ml-auto">
                    dropdown
                  </div>
                </div>
                <div className="list-group">
                  {mapCatProjectsData}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catProjectsData: state.catProjectsData,
});

const mapDispatchToProps = dispatch => ({
  onGetCategoryProjectData: catSlug => {
    dispatch(getCategoryProjectsData(catSlug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableProjects);