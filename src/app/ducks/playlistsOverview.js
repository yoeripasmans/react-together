import createAction from 'services/createAction';
import axios from 'axios';

const url = 'http://localhost:5000/playlists';

// Action  Types
const GET_ALLPLAYLISTDATA = 'GET_ALLPLAYLISTDATA';
const GET_ALLPLAYLISTDATA_SUCCESS = 'GET_ALLPLAYLISTDATA_SUCCESS';
const GET_ALLPLAYLISTDATA_FAILED = 'GET_ALLPLAYLISTDATA_FAILED';

// Reducer
const initialState = {
    error: false,
    loading: false,
    playlists: [],
    allPlaylistsLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_ALLPLAYLISTDATA_SUCCESS:
        return {
            ...state,
            loading: false,
            allPlaylistsLoaded: true,
            playlists: payload,
        };
    case GET_ALLPLAYLISTDATA_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
            allPlaylistsLoaded: false,
        };
    case GET_ALLPLAYLISTDATA:
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
export const getPlaylistDataSuccess = createAction(GET_ALLPLAYLISTDATA_SUCCESS);
export const getPlaylistDataFailed = createAction(GET_ALLPLAYLISTDATA_FAILED);

export const getAllPlaylistsData = () => (dispatch) => {
    dispatch({ type: GET_ALLPLAYLISTDATA });
    axios.get(url).then((res) => {
        const playlists = res.data;
        dispatch({ type: GET_ALLPLAYLISTDATA_SUCCESS, payload: playlists });
    });
};
