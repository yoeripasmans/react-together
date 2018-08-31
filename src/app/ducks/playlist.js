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
    tracks: [],
    tracksLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_DATA_SUCCESS:
        return {
            ...state,
            loading: false,
            tracksLoaded: true,
            tracks: payload.map(track => ({
                url: track.url,
                name: track.name,
                image: track.image[0]['#text'],
                artistName: track.artist.name,
            })),
        };
    case GET_DATA_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
            tracksLoaded: false,
        };
    case GET_DATA:
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
export const getDataSuccess = createAction(GET_DATA_SUCCESS);
export const getDataFailed = createAction(GET_DATA_FAILED);

export const getTracks = () => (dispatch, getState, api) => {
    dispatch({ type: GET_DATA });

    const query = {
        method: 'chart.gettoptracks',
    };

    api.get({ path: '', query })
        .then((res) => {
            dispatch(getDataSuccess(res.tracks.track));
        });
};


export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_DATA });
};
