import { fetchFlavorCleaner } from '../util/cleaners/fetchFlavorCleaner';
import { getFlavors } from '../actions';
import { setError } from '../actions';

export const fetchFlavors = url => {
	return async dispatch => {
		try {
			const data = await fetchFlavors(url);
			dispatch(getFlavors(data));
			return data;
		} catch (error) {
			dispatch(setError(error.message));
		}
	};
};
