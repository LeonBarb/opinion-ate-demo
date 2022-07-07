export const START_LOADING = 'START_LOADING';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const RECORD_SERVER_ERROR = 'RECORD_SERVER_ERROR';

export const loadRestaurants = () => async (dispatch, getState, api) => {
  try {
    dispatch(startLoading());
    const records = await api.loadRestaurants();
    dispatch(storeRestaurants(records));
  } catch {
    dispatch(recordLoadError());
  }
};

export const createRestaurant = name => async (dispatch, getState, api) => {
  const record = await api.createRestaurant(name);
  dispatch(addRestaurant(record));
};

const addRestaurant = record => ({
  type: ADD_RESTAURANT,
  record,
});

const startLoading = () => ({type: START_LOADING});

const recordLoadError = () => ({type: RECORD_LOADING_ERROR});

const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});
