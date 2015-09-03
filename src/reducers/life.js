var _ = require("lodash");

function makeGrid() {
	var width = 10;
	var height = 10;
	var grid = _.times(height, _.partial(_.times, width, _.constant(false)));
	return "grids";
}

export default function life(state = makeGrid(), action) {
	return state;
}
