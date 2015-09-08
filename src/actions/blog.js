export function setPostText(post, text) {
	return {
		type: "SET_POST_TEXT",
		post: post,
		text: text
	};
}

export function togglePostEditing(post) {
	return {
		type: "TOGGLE_POST_EDITING",
		post: post
	};
}
