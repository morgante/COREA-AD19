import React, { Component, PropTypes } from 'react';
var markdown = require( "markdown" ).markdown;

var styles = require("../../../styles/editor.scss");

export class TextEditor extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(event) {
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<div>
				<textarea className={styles.editor} value={this.props.content} onChange={this.handleChange.bind(this)} />
			</div>
		);
  }
}
