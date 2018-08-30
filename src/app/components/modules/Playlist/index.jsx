import React, { Fragment } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { install, resetItems } from 'ducks/data';
import Button from 'common/Button';

const CenteredSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    svg {
        margin: 50px 0;
    }
`;


const Playlist = ({ installation: { loading }, songs, ...props }) => {
    return (
        <CenteredSection>
            <LogoIcon />
            {songs.length > 0 ? (
                <Fragment>
                    <Button onClick={props.resetItems}>Reset</Button>
                    <ul>
                        {songs.map(song => <li key={song.name}>{song.name}</li>)}
                    </ul>
                </Fragment>
            ) : (
                <Button onClick={props.install}>
                    {loading ? 'Installing ...' : 'Test installation'}
                </Button>
            )}
        </CenteredSection>
)};

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
    loading: state.data.loading,
}), { getTracks, resetItems })(Playlist);
