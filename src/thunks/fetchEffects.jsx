import { fetchEffectsCleaner } from '../util/cleaners/fetchFlavorCleaner';
import { getEffects } from '../actions';
import { setError } from '../actions';

export const fetchEffects = url => {
	return async dispatch => {
		try {
			const data = await fetchEffects(url);
			dispatch(getEffects(data));
			return data;
		} catch (error) {
			dispatch(setError(error.message));
		}
	};
};
