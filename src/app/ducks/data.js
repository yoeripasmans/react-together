import createAction from 'services/createAction';

// Action  Types
const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILED = 'GET_DATA_FAILED';


const RESET_DATA = 'RESET_DATA';

// Reducer
const initialState = {
    passed: false,
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

export const install = () => (dispatch) => {
    dispatch({ type: GET_DATA });

    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=2pac&api_key=aca525eaa13471a07313b00e90bcb8b3&format=json')
        .then(res => res.json())
        .then((json) => {
            dispatch(getDataSuccess(json.toptracks.track));
        });
};


export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_DATA });
};
