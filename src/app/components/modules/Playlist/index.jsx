import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Queue from 'modules/Playlist/components/Queue';
import { getTracks, resetItems } from 'ducks/data';

class Playlist extends Component {
    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        const { loading, songs } = this.props;

        return (
            <div>
                {loading ? 'loading' : songs.map(song => (
                    <div key={song.name}>{song.name}</div>
                ))}
            </div>
        )
    }
}

// const Playlist = ({ installation: { loading }, songs, ...props }) => (
//     <Queue data={props} />
// );

Playlist.propTypes = {
    getTracks: PT.func.isRequired,
    installation: PT.shape({
        loading: PT.bool,
        passed: PT.bool,
    }),
    songs: PT.array,
};

export default connect(state => ({
    installation: state.data,
    songs: state.data.songs,
    loading: state.data.loading,
}), { getTracks, resetItems })(Playlist);
