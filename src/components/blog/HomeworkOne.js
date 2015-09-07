import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
var DocumentTitle = require('react-document-title');

class HomeworkOne extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.mode === "title") {
			return (<span>Homework 1</span>);
		} else {
			return (
				<DocumentTitle title="Homework 1">
					<div>
						<p>This is the first post, yay!</p>
					</div>
				</DocumentTitle>
			);
		}
  }
}

function mapStateToProps(state, ownProps) {
	return {
		blog: state.blog
	};
}

export default connect(
	mapStateToProps
)(HomeworkOne);