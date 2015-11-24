import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
var DocumentTitle = require('react-document-title');
import {DisplayMarkdown} from '../editor/DisplayMarkdown';
import {TextEditor} from '../editor/TextEditor';
import {setPostText, togglePostEditing} from "../../actions/blog";
import {Button, Badge} from "react-bootstrap";

class RewireVideo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const title = "What does Fox say?"
		var contents = (
			<div>
				<h2>{title}</h2>
				<iframe width="853" height="480" src="https://www.youtube.com/embed/meAJVFj50yw" frameborder="0" allowfullscreen></iframe>
			</div>
		);

		if (this.props.mode === "title") {
			return (<span>{title}</span>);
		} else {
			return (
				<DocumentTitle title={title}>
					{contents}
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
)(RewireVideo);
