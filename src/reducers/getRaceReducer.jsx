export const getRaceReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_RACE':
			return action.race;
		default:
			return state;
	}
};
