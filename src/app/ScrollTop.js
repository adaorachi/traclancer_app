import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollTop.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(ScrollTop);