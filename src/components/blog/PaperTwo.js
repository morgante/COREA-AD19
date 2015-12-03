import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
var DocumentTitle = require('react-document-title');
import {DisplayMarkdown} from '../editor/DisplayMarkdown';
import {TextEditor} from '../editor/TextEditor';
import {setPostText, togglePostEditing} from "../../actions/blog";
import {Button, Badge} from "react-bootstrap";

class PaperTwo extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(text) {
		this.props.dispatch(setPostText("paper2", text));
	}

	toggleEditing() {
		this.props.dispatch(togglePostEditing("paper2"));
	}

	render() {
		const post = this.props.blog.posts.paper2;
		const text = post.text;
		const title = post.title;
		const wordLength = text.split(' ').length;
		var contents;

		if (post.edit) {
			contents = (
				<div>
					<h2>{title} <Badge>{wordLength} words</Badge></h2>
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
)(PaperTwo);
