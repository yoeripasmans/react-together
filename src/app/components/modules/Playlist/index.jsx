import React, { Component, Fragment } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTracks, resetItems, removeTrack } from 'ducks/playlist';

import PlaylistHeader from 'modules/Playlist/components/PlaylistHeader';
import ActiveUsers from 'modules/Playlist/components/ActiveUsers';
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

    removeTrackHandler = (track) => {
        this.props.removeTrack(track.url);
    };

    render() {
        const { loading, tracks } = this.props;

        if (loading) {
            return <ScLoader />;
        }
        return (
            <Fragment>
                <PlaylistHeader />
                <ActiveUsers />
                <Queue
                    tracks={tracks}
                    tableMutateHandler={this.removeTrackHandler}
                />
            </Fragment>
        );
    }
}

Playlist.propTypes = {
    getTracks: PT.func.isRequired,
    loading: PT.bool,
    tracks: PT.array,
    tracksLoaded: PT.bool,
    removeTrack: PT.func,
};

export default connect(state => ({
    installation: state.playlist,
    tracks: state.playlist.tracks,
    loading: state.playlist.loading,
    tracksLoaded: state.playlist.tracksLoaded,
}), { getTracks, resetItems, removeTrack })(Playlist);
