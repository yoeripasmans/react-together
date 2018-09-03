import createAction from 'services/createAction';

// Action  Types
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const GET_SEARCH_RESULTS_SUCCES = 'GET_SEARCH_RESULTS_SUCCES';
const GET_SEARCH_RESULTS_FAILED = 'GET_SEARCH_RESULTS_FAILED';
const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';

const RESET_SEARCH_RESULTS = 'RESET_SEARCH_RESULTS';

// Reducer
const initialState = {
    error: false,
    loading: false,
    results: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_SEARCH_RESULTS_SUCCES:
        return {
            ...state,
            loading: false,
            results: payload.map(track => ({
                url: track.url,
                name: track.name,
                image: track.image[0]['#text'],
                artistName: track.artist,
            })),
        };
    case GET_SEARCH_RESULTS_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
    case GET_SEARCH_RESULTS:
        return {
            ...state,
            loading: true,
            error: false,
        };
    case SET_SEARCH_LOADING:
        return {
            ...state,
            loading: true,
        };
    case RESET_SEARCH_RESULTS:
        return initialState;
    default:
        return state;
    }
};

// Actions
export const resetSearchResults = createAction(RESET_SEARCH_RESULTS);
export const getResultsSuccess = createAction(GET_SEARCH_RESULTS_SUCCES);
export const getResultsFailed = createAction(GET_SEARCH_RESULTS_FAILED);
export const setSearchLoading = createAction(SET_SEARCH_LOADING);

export const getSearchResults = searchQuery => (dispatch, getState, api) => {
    if (searchQuery === '') {
        dispatch(resetSearchResults());
        return;
    }

    dispatch({ type: GET_SEARCH_RESULTS });

    const query = {
        method: 'track.search',
        track: searchQuery,
    };

    api.get({ path: '', query })
        .then((res) => {
            dispatch(getResultsSuccess(res.results.trackmatches.track));
        });
};
