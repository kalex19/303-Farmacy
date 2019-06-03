export const getEffectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_EFFECTS':
			return action.effects;
		default:
			return state;
	}
};
