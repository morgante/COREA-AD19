import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
var DocumentTitle = require('react-document-title');
var styles = require("../../styles/main.scss");

import {SiteHeader} from './SiteHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextValue) {
    // Available thanks to contextTypes below
    const { router } = this.context;
    router.transitionTo(`/${nextValue}`);
  }

  render() {
    // Injected by React Router
    const { location, children } = this.props;
    const { pathname } = location;
    const value = pathname.substring(1);

    return (
      <DocumentTitle title="Communication & Technology">
        <div>
          <SiteHeader />
          {children}
        </div>
      </DocumentTitle>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  children: PropTypes.node
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(
  mapStateToProps
)(App);
