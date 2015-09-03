import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CounterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>You are on the blog page.</p>
        <p>{this.props.blog}</p>
      </div>
    );
  }
}

CounterPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  };
}

export default connect(
  mapStateToProps
)(CounterPage);
