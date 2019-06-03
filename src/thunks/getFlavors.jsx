import { urlFlavors } from '../util/urls';

export const getFlavor = async () => {
	const response = await fetch(urlFlavors);
	if (!response.ok) {
		throw Error('Failed to fetch flavors');
	}
	return await response.json();
};
