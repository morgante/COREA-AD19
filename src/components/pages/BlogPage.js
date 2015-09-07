import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
var DocumentTitle = require('react-document-title');

import BlogIndex from "../blog/BlogIndex";

const posts = {
	"homework1": require("../blog/HomeworkOne")
};

class BlogPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("blog page", this.props.params);
		const page = this.props.params.page;
		var Post;
		if (page !== undefined) {
			Post = posts[page];
		} else {
			Post = BlogIndex;
		}
		return (
			<DocumentTitle title="Blog">
				<div>
					<h3><Link to="/blog">Blog</Link></h3>
					<Post posts={posts} />
				</div>
			</DocumentTitle>
		);
	}
}

BlogPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
	return {
		blog: state.blog
	};
}

export default connect(
	mapStateToProps
)(BlogPage);