export const fetchEffectsCleaner = effects => {
	return effects.map(effect => {
		return { ...effect, type: 'effect' };
	});
};
