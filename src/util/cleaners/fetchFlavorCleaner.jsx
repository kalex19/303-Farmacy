export const fetchFlavorCleaner = flavors => {
	return flavors.map(flavor => {
		return { ...flavor, type: 'flavor' };
	});
};
