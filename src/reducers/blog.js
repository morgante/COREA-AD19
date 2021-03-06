var _ = require("lodash");

var defaultState = {
	posts: {
		homework1: {
			title: "Homework One: The Meaning of Communication & Technology",
			text: require("../../text/homework1.md"),
			edit: false
		},
		homework2: {
			title: "Homework Two: An Exercise in Technical Asceticism",
			text: require("../../text/homework2.md"),
			edit: false
		},
		emoticons: {
			title: "Conceptual Emoticons",
			text: require("../../text/emoticons.md"),
			edit: false
		},
		paper1: {
			title: "Paper One",
			text: require("../../text/paper1.md"),
			edit: false
		},
		paper2: {
			title: "Paper Two",
			text: require("../../text/paper2.md"),
			edit: false
		},
		semaphore: {
			title: "Semaphore",
			text: require("../../text/semaphore.md"),
			edit: false
		},
		stackexchange: {
			title: "StackExchange",
			text: require("../../text/stackexchange.md"),
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
