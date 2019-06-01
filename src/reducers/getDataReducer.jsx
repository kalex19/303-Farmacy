export const getFlavorReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_FLAVOR':
			return action.flavors;
		default:
			return state;
	}
};

export const getEffectsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_EFFECTS':
			return action.effects;
		default:
			return state;
	}
};

export const getRaceReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_RACE':
			return action.race;
		default:
			return state;
	}
};
