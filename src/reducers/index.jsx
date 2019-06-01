import { combineReducers } from 'redux';
import { getFlavorReducer } from './getDataReducer';
import { getEffectsReducer } from './getDataReducer';
import { getRaceReducer } from './getDataReducer';

export const rootReducer = combineReducers({
	getFlavorReducer,
	getEffectsReducer,
	getRaceReducer
});
