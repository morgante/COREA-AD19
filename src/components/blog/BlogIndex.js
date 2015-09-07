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
				<li>
					<Link to={url}>
						<Post mode="title" />
					</Link>
				</li>
			);
		});
		return (
			<div>
				<h3>Blog Index</h3>
				<p>Please choose a post:</p>
				<ul>
					{posts}
				</ul>
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
