export const getFlavors = flavors => ({
  type: 'GET_FLAVORS',
  flavors
})

export const getEffects = effects => ({
  type: 'GET_EFFECTS',
  effects
})

export const getRace = race => ({
  type: 'GET_RACE',
  race
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const setError = error => ({
  type: 'SET_ERROR',
  error
})

export const toggleFav = id => ({
  type: 'TOGGLE_FAV',
  id
})