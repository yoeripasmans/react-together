import createAction from 'services/createAction';

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
    tracks: [],
    tracksLoaded: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_TRACKS_SUCCESS:
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

export const getTracks = () => (dispatch, getState, api) => {
    dispatch({ type: GET_TRACKS });

    const query = {
        method: 'chart.gettoptracks',
    };

    api.get({ path: '', query })
        .then((res) => {
            dispatch(getTracksSuccess(res.tracks.track));
        }).catch((err) => {
            console.log('errr',err);
        });
};


export const resetItems = () => (dispatch) => {
    dispatch({ type: RESET_TRACKS });
};
