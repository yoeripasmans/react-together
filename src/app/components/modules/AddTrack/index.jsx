import React, { Component } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { install, resetItems } from 'ducks/playlist';
import SearchHeader from './components/SearchHeader';

const OverlaySection = styled.section`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgb(50,50,50);
`;

class AddTrack extends Component {
    inputOnchangeHandler = (event) => {
        // update search value
    };
    render() {
        return (
            <OverlaySection>
                <SearchHeader searchValue="Testvalue" inputOnchangeHandler={this.inputOnchangeHandler} />
            </OverlaySection>
        );
    }
}

AddTrack.propTypes = {
};

export default connect(state => ({
    installation: state.playlist,
    songs: state.playlist.songs,
}), { install, resetItems })(AddTrack);
