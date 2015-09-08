import React, { Component, PropTypes } from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

export class SiteHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="masthead">
				<div className="container">
					<h4 className="brand">
						<Link to="/">
							<span className="icon"><Glyphicon glyph="home" /></span> Communication & Technology
						</Link>
					</h4>
				</div>
			</div>
		);
  }
}
