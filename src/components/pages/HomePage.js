import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container page">
        <h3>Welcome to Communication and Technology</h3>
        <p>Please choose a page:</p>
        <ul>
          <li><Link to="/blog/homework1">Homework 1</Link></li>
          <li><Link to="/blog/homework2">Homework 2</Link></li>
          <li><Link to="/blog/emoticons">Emoticons</Link></li>
          <li><Link to="/blog/paper1">Paper 1 (Final)</Link></li>
          <li><Link to="/blog/rewire">Rewire Project</Link></li>
          <li><Link to="/blog/paper2">Paper 2 (Final)</Link></li>
        </ul>
      </div>
    );
  }
}

HomePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(
  mapStateToProps
)(HomePage);
