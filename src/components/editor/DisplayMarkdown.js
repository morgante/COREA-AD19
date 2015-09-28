import React, { Component, PropTypes } from 'react';
var markdown = require( "markdown" ).markdown;

export class DisplayMarkdown extends Component {
	constructor(props) {
		super(props);
	}

	createHtml() {
		var html = markdown.toHTML(this.props.content);

		html = html.replace(/src=\"(\w+).png\"/i, (match, src) => {
			var file = require("../../../images/" + src + ".png");
			return 'src="' + file + '"';
		});


		return {
			__html: html
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
