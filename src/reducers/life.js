var _ = require("lodash");

function makeGrid() {
	var width = 10;
	var height = 10;
	var grid = _.times(height, _.partial(_.times, width, _.constant(false)));
	return "grids";
}

export default function life(state = makeGrid(), action) {
	switch (action.type) {
		case "DO_GAME_OF_LIFE_STEP":
			console.log("action life", state);
			return state;
		default:
			return state;
	}
}
