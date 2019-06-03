import { combineReducers } from 'redux';
import { getFlavorReducer } from './getFlavorReducer';
import { getEffectsReducer } from './getEffectsReducer';
import { getRaceReducer } from './getRaceReducer';
import { toggleFavReducer } from './toggleFavReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { setErrorReducer } from './setErrorReducer';

export default combineReducers({
	getFlavorReducer,
	getEffectsReducer,
	getRaceReducer,
	toggleFavReducer,
	isLoadingReducer,
	setErrorReducer
});
