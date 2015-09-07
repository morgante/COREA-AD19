var _ = require("lodash");

var defaultState = {
	posts: {
		homework1: {
			title: "Homework Numero Two",
			text: require("../../text/homework1.md"),
			edit: false
		}
	}
};

export default function blog(state = defaultState, action) {
	switch (action.type) {
		case "SET_POST_TEXT":
			return _.merge({}, state, {
				posts: {
					[action.post]: {
						text: action.text
					}
				}
			});
		case "TOGGLE_POST_EDITING":
			return _.merge({}, state, {
				posts: {
					[action.post]: {
						edit: !state.posts[action.post].edit
					}
				}
			});
		default:
			return state;
	}
}
