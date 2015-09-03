import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import Cell from "./cell";

function makeGrid() {
	var width = 10;
	var height = 10;
	var grid = _.times(height, _.partial(_.times, width, _.constant(false)));
	grid = toggle(grid, 1, 1);
	grid = toggle(grid, 2, 2);
	grid = toggle(grid, 3, 0);
	grid = toggle(grid, 3, 1);
	grid = toggle(grid, 3, 2);
	return grid;
}

function toggle(grid, targetRow, targetColumn) {
	return _.map(grid, function(cells, row) {
		if (row === targetRow) {
			return _.map(cells, function(cell, column) {
				return (column === targetColumn) ? !cell : cell;
			});
		} else {
			return cells;
		}
	});
}

function evaluate(grid) {
	var newGrid = grid;
	_.each(grid, function(cells, row) {
		_.each(cells, function(isAlive, column) {
			var neighbors = [];
			const hasTop = row > 0;
			const hasLeft = column > 0;
			const hasRight = column < cells.length - 1;
			const hasBottom = row < grid.length - 1;
			const reverse = _.partial(toggle, newGrid, row, column);
			if (hasTop) {
				neighbors.push(grid[row - 1][column]);
				if (hasLeft) {
					neighbors.push(grid[row - 1][column - 1]);
				}
				if (hasRight) {
					neighbors.push(grid[row - 1][column + 1]);
				}
			}
			if (hasLeft) {
				neighbors.push(grid[row][column - 1]);
			}
			if (hasRight) {
				neighbors.push(grid[row][column + 1]);
			}
			if (hasBottom) {
				neighbors.push(grid[row + 1][column]);
				if (hasLeft) {
					neighbors.push(grid[row + 1][column - 1]);
				}
				if (hasRight) {
					neighbors.push(grid[row + 1][column + 1]);
				}
			}
			const liveCount = _.filter(neighbors).length;
			if (isAlive && liveCount < 2) {
				newGrid = reverse();
			}
			if (isAlive && liveCount > 3) {
				newGrid = reverse();
			}
			if (!isAlive && liveCount === 3) {
				newGrid = reverse();
			}
		});
	});
	return newGrid;
}

export default class GameOfLife extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: makeGrid()
		};
	}

	componentDidMount() {
		this.evaluate();
		setInterval(this.evaluate.bind(this), 500);
	}

	evaluate() {
		console.log("evaluate now");
		this.setState({
			grid: evaluate(this.state.grid)
		});
	}

	render() {
		var grid = this.state.grid;

		const board = _.map(grid, function(cellValues, row) {
			const cells = _.map(cellValues, function(cell, column) {
				return (
					<Cell alive={cell} />
				);
			});
			return (
				<p key={row}>{cells}</p>
			);
		})

		return (
			<div>
				<h3>Game of life is here!</h3>
				<p>{board}</p>
			</div>
		);
	}
}
