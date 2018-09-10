import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Loader from 'common/Loader';
import { Link } from 'react-router-dom';
import { getAllPlaylistsData } from 'ducks/playlistsOverview';

const ScLoader = styled(Loader)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

class PlaylistsOverview extends React.Component {
    componentDidMount() {
        if (this.props.allPlaylistsLoaded === false) {
            this.props.getAllPlaylistsData();
        }
    }
    render() {
        const { loading, playlists } = this.props;
        console.log(playlists);

        if (loading || Object.keys(playlists).length === 0) {
            return <ScLoader />;
        }
        return (
            <ul>
                {playlists.map(playlist => (
                    <Link to={`/playlist/${playlist._id}`} id={playlist._id}>{playlist.name}</Link>
                ))}
            </ul>
        );
    }
}

PlaylistsOverview.propTypes = {
    allPlaylistsLoaded: PT.bool,
    playlists: PT.array,
    loading: PT.bool,
    getAllPlaylistsData: PT.func,
};

export default connect(state => ({
    installation: state.playlistsOverview,
    playlists: state.playlistsOverview.playlists,
    loading: state.playlistsOverview.loading,
    allPlaylistsLoaded: state.playlistsOverview.allPlaylistsLoaded,
}), { getAllPlaylistsData })(PlaylistsOverview);
