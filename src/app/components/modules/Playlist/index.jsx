import React, { Component, Fragment } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPlaylistData, resetItems, removeTrack } from 'ducks/playlist';

import MainHeader from 'common/MainHeader';
import PlaylistHeader from 'modules/Playlist/components/PlaylistHeader';
import ActiveUsers from 'modules/Playlist/components/ActiveUsers';
import Queue from 'modules/Playlist/components/Queue';
import Loader from 'common/Loader';
import BackgroundImage from 'common/BackgroundImage';

const ScLoader = styled(Loader)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

class Playlist extends Component {
    componentDidMount() {
        this.props.getPlaylistData();
    }

    removeTrackHandler = (track) => {
        this.props.removeTrack(track.url);
    };

    render() {
        const { loading, playlistData } = this.props;
        // Show loader if loading is true or data is empty
        if (loading || Object.keys(playlistData).length === 0) {
            return <ScLoader />;
        }
        return (
            <Fragment>
                <MainHeader />
                <PlaylistHeader name={playlistData.name} createdBy={playlistData.createdBy} />
                <ActiveUsers userData={playlistData.activeUsers} />
                <Queue
                    tracks={playlistData.tracks}
                    tableMutateHandler={this.removeTrackHandler}
                />
                <BackgroundImage />
            </Fragment>
        );
    }
}

Playlist.propTypes = {
    getPlaylistData: PT.func.isRequired,
    loading: PT.bool,
    playlistData: PT.object,
    tracksLoaded: PT.bool,
    removeTrack: PT.func,
};

export default connect(state => ({
    installation: state.playlist,
    playlistData: state.playlist.playlistData,
    loading: state.playlist.loading,
    tracksLoaded: state.playlist.tracksLoaded,
}), { getPlaylistData, resetItems, removeTrack })(Playlist);
