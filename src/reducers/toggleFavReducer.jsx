export const toggleFavReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_FAV':
			return true;
		default:
			return state;
	}
};
