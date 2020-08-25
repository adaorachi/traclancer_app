import React from 'react';
import * as Icon from 'react-feather';

export default function Projects() {
  return (
    <div className="project-page">
      <div className="available-projects">
        <div className="available-project-list">
          <div className="project-category">
            <div className="category-card">
              <div className="card-header">
                <div className="project-icon">
                  <Icon.Calendar color="#fff" width={28} />
                </div>
              </div>
              <div className="card-body">
                <div className="project-no">
                  <span>Projects</span>
                  <span>15</span>
                </div>
                <div className="category-title">
                  <h4>Web Development</h4>
                </div>
              </div>
              <div className="card-footer">
                  <div>View All</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
