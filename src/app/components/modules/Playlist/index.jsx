import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Queue from 'modules/Playlist/components/Queue';
import { getTracks, resetItems } from 'ducks/playlist';

class Playlist extends Component {
    componentDidMount() {
        this.props.getTracks();
    }

    removeTrackHandler = () => {
        // put remove track functionality here
    };

    render() {
        const { loading, tracks } = this.props;

        if (loading) {
            return <div>Loading</div>;
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
};

export default connect(state => ({
    installation: state.playlist,
    tracks: state.playlist.tracks,
    loading: state.playlist.loading,
}), { getTracks, resetItems })(Playlist);
