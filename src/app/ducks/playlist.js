import createAction from 'services/createAction';
import axios from 'axios';

const url = 'http://localhost:5000';

// Action  Types
const GET_PLAYLISTDATA = 'GET_PLAYLISTDATA';
const GET_PLAYLISTDATA_SUCCESS = 'GET_PLAYLISTDATA_SUCCESS';
const GET_PLAYLISTDATA_FAILED = 'GET_PLAYLISTDATA_FAILED';
const RESET_TRACKS = 'RESET_TRACKS';

const ADD_TRACK = 'ADD_TRACK';

const REMOVE_TRACK = 'REMOVE_TRACK';
// Reducer
const initialState = {
    error: false,
    loading: false,
    playlistData: {},
    tracksLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_PLAYLISTDATA_SUCCESS:
        return {
            ...state,
            loading: false,
            tracksLoaded: true,
            playlistData: payload,
        };
    case GET_PLAYLISTDATA_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
            tracksLoaded: false,
        };
    case GET_PLAYLISTDATA:
        return {
            ...state,
            loading: true,
            error: false,
        };
    case ADD_TRACK:
        return {
            ...state,
            tracks: [...state.tracks, payload],
        };
    case REMOVE_TRACK:
        return {
            ...state,
            tracks: state.tracks.filter(track => track.url !== payload),
        };
    default:
        return state;
    }
};

// Actions
export const getPlaylistDataSuccess = createAction(GET_PLAYLISTDATA_SUCCESS);
export const getPlaylistDataFailed = createAction(GET_PLAYLISTDATA_FAILED);

export const addTrack = createAction(ADD_TRACK);

export const removeTrack = createAction(REMOVE_TRACK);

export const getPlaylistData = () => (dispatch) => {
    dispatch({ type: GET_PLAYLISTDATA });
    axios.get(url + window.location.pathname).then((res) => {
        const playlistData = res.data;
        dispatch({ type: GET_PLAYLISTDATA_SUCCESS, payload: playlistData });
    });
};

export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_TRACKS });
};
