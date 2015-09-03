import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import GameOfLife from '../life';

class LifePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is the game of life.</p>
        <GameOfLife grid={this.props.grid} />
      </div>
    );
  }
}

LifePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    grid: state.life
  };
}

export default connect(
  mapStateToProps
)(LifePage);
