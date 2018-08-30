import createAction from 'services/createAction';

// Action  Types
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const GET_SEARCH_RESULTS_SUCCES = 'GET_SEARCH_RESULTS_SUCCES';
const GET_SEARCH_RESULTS_FAILED = 'GET_SEARCH_RESULTS_FAILED';

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
            results: payload,
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
    default:
        return state;
    }
};

// Actions
export const getResultsSuccess = createAction(GET_SEARCH_RESULTS_SUCCES);
export const getResultsFailed = createAction(GET_SEARCH_RESULTS_FAILED);

export const getSearchResults = (searchQuery) => (dispatch, getState, api) => {
    dispatch({ type: GET_SEARCH_RESULTS });

    const query = {
        method: 'track.search',
        track: searchQuery,
    };

    api.get({ path: '', query })
        .then((res) => {
            console.log(res);
            dispatch(getResultsSuccess(res.results.trackmatches.track));
        });
};
