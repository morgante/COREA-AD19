import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

// Stack Exchange Experiment

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container page">
        <h3>Welcome to Communication and Technology</h3>
        <p>Please explore the documentation and artifacts from this class:</p>
        <ul>
          <li><Link to="/blog/homework1">Homework 1</Link> (What Does Technology Mean To Me?)</li>
          <li><Link to="/blog/homework2">Homework 2</Link> (Detox Diary)</li>
          <li><Link to="/blog/emoticons">Conceptual Emoticons</Link></li>
          <li><Link to="/blog/semaphore">Semaphore Project</Link></li>
          <li><Link to="/blog/stackexchange">Stack Exchange</Link></li>
          <li><a href="http://src441.nyuad.im/web/RadioScript.pdf" target="_blank">Radio Broadcast Script</a> (posted by <a href="http://src441.nyuad.im/web/">Sebastian</a>)</li>
          <li><a href="http://src441.nyuad.im/web/">Deep Dive Documentation</a> (on Sebastian's site)</li>
          <li><Link to="/blog/rewire">Rewire Experiment</Link></li>
          <li>Final Project: <a href="http://morgante.github.io/inteletravel/">InteleTravel</a></li>
        </ul>
        <p>You can also read the two papers:</p>
        <ul>
          <li><Link to="/blog/paper1">Paper 1 (Final)</Link></li>
          <li><Link to="/blog/paper2">Paper 2 (Final)</Link></li>
        </ul>
        <p>
          The source for this website, and its full version history, is available on <a href="https://github.com/morgante/COREA-AD19">GitHub</a> under an <a href="https://github.com/morgante/COREA-AD19/blob/master/LICENSE">MIT license</a>.
        </p>
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
