import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
var DocumentTitle = require('react-document-title');
import {DisplayMarkdown} from '../editor/DisplayMarkdown';
import {TextEditor} from '../editor/TextEditor';
import {setPostText, togglePostEditing} from "../../actions/blog";
import {Button, Badge} from "react-bootstrap";

class Emoticons extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(text) {
		this.props.dispatch(setPostText("emoticons", text));
	}

	toggleEditing() {
		this.props.dispatch(togglePostEditing("emoticons"));
	}

	render() {
		const post = this.props.blog.posts.emoticons;
		const text = post.text;
		const title = post.title;
		const wordLength = text.split(' ').length;
		var contents;

		if (post.edit) {
			contents = (
				<div>
					<h2>{title}</h2>
					<DisplayMarkdown content={text} />
					<TextEditor content={text} onChange={this.handleChange.bind(this)} />
					<Button bsStyle="success" onClick={this.toggleEditing.bind(this)}>Done</Button>
				</div>
			);
		} else {
			contents = (
				<div>
					<h2>{title}</h2>
					<DisplayMarkdown content={text} />
					<Button onClick={this.toggleEditing.bind(this)}>Edit</Button>
				</div>
			);
		}

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
)(Emoticons);
