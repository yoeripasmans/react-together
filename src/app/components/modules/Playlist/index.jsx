import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Queue from 'modules/Playlist/components/Queue';
import { install, resetItems } from 'ducks/data';

const Playlist = ({ installation: { loading }, songs, ...props }) => (
    <Queue />
);

Playlist.propTypes = {
    install: PT.func.isRequired,
    installation: PT.shape({
        loading: PT.bool,
        passed: PT.bool,
    }),
    songs: PT.array,
};

export default connect(state => ({
    installation: state.data,
    songs: state.data.songs,
}), { install, resetItems })(Playlist);
