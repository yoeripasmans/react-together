import createAction from 'services/createAction';

// Action  Types
const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILED = 'GET_DATA_FAILED';
const RESET_DATA = 'RESET_DATA';

// Reducer
const initialState = {
    error: false,
    loading: false,
    songs: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_DATA_SUCCESS:
        return {
            ...state,
            loading: false,
            songs: payload,
        };
    case GET_DATA_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
    case GET_DATA:
        return {
            ...state,
            loading: true,
            error: false,
        };
    case RESET_DATA:
        return {
            ...state,
            songs: [],
        };
    default:
        return state;
    }
};

// Actions
export const getDataSuccess = createAction(GET_DATA_SUCCESS);
export const getDataFailed = createAction(GET_DATA_FAILED);

export const getTracks = () => (dispatch, getState, api) => {
    dispatch({ type: GET_DATA });

    const query = {
        method: 'artist.gettoptracks',
        artist: '2pac',
    };

    api.get({ path: '', query })
        .then((res) => {
            dispatch(getDataSuccess(res.toptracks.track));
        });
};


export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_DATA });
};
