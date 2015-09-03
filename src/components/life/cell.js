import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

export default class Cell extends Component {
	render() {
		const color = this.props.alive ? "+" : "_";
		return (
			<span>
				{color}
			</span>
		);
	}
}
