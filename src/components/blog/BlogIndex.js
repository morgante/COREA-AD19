import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
var _ = require("lodash");
import { Link } from 'react-router';

class BlogIndex extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const posts = _.map(this.props.posts, function(Post, key) {
			const url = "/blog/" + key;
			return (
				<Link to={url}>
					<Post mode="title" />
				</Link>
			);
		});
		return (
			<div>
				<p>This is the blog index.</p>
				<div>{posts}</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
	};
}

export default connect(
	mapStateToProps
)(BlogIndex);
