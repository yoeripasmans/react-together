import React, { Component } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTracks, resetItems } from 'ducks/playlist';

import Queue from 'modules/Playlist/components/Queue';
import Loader from 'common/Loader';

const ScLoader = styled(Loader)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

class Playlist extends Component {
    componentDidMount() {
        if (this.props.tracksLoaded === false) {
            this.props.getTracks();
        }
    }

    removeTrackHandler = () => {
        // put remove track functionality here
    };

    render() {
        const { loading, tracks } = this.props;

        if (loading) {
            return <ScLoader />;
        }
        return (
            <Queue
                tracks={tracks}
                tableMutateHandler={this.removeTrackHandler}
            />);
    }
}

Playlist.propTypes = {
    getTracks: PT.func.isRequired,
    loading: PT.bool,
    tracks: PT.array,
    tracksLoaded: PT.bool,
};

export default connect(state => ({
    installation: state.playlist,
    tracks: state.playlist.tracks,
    loading: state.playlist.loading,
    tracksLoaded: state.playlist.tracksLoaded,
}), { getTracks, resetItems })(Playlist);
