import { urlEffects } from '../util/urls';

export const getFlavor = async () => {
	const response = await fetch(urlEffects);
	if (!response.ok) {
		throw Error('Failed to fetch effects');
	}
	return await response.json();
};
