import createAction from 'services/createAction';
import axios from 'axios';

const url = 'http://localhost:5000';

// Action  Types
const GET_TRACKS = 'GET_TRACKS';
const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
const GET_TRACKS_FAILED = 'GET_TRACKS_FAILED';
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
    case GET_TRACKS_SUCCESS:
        return {
            ...state,
            loading: false,
            tracksLoaded: true,
            playlistData: payload,
        };
    case GET_TRACKS_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
            tracksLoaded: false,
        };
    case GET_TRACKS:
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
export const getTracksSuccess = createAction(GET_TRACKS_SUCCESS);
export const getTracksFailed = createAction(GET_TRACKS_FAILED);

export const addTrack = createAction(ADD_TRACK);

export const removeTrack = createAction(REMOVE_TRACK);

export const getTracks = () => (dispatch) => {
    dispatch({ type: GET_TRACKS });
    console.log(window.location);
    axios.get(url + window.location.pathname).then((res) => {
        const playlistData = res.data;
        dispatch({ type: GET_TRACKS_SUCCESS, payload: playlistData });
    });
};

export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_TRACKS });
};
