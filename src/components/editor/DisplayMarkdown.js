import React, { Component, PropTypes } from 'react';
var markdown = require( "markdown" ).markdown;

export class DisplayMarkdown extends Component {
	constructor(props) {
		super(props);
	}

	createHtml() {
		return {
			__html: markdown.toHTML(this.props.content)
		};
	}

	render() {
		return (
			<div>
				<div dangerouslySetInnerHTML={this.createHtml()} />
			</div>
		);
  }
}
