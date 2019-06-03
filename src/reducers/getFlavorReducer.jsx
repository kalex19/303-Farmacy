export const getFlavorReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_FLAVOR':
			return action.flavors;
		default:
			return state;
	}
};
