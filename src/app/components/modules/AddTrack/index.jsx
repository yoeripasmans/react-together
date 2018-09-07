import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash/fp';
// import Loader from 'react-loader';

import { getSearchResults, resetSearchResults, setSearchLoading } from 'ducks/search';
import { addTrack, getTracks } from 'ducks/playlist';

import BackgroundImage from 'common/BackgroundImage';
import AddTrackResultsTable from 'common/AddTrackResultsTable';
import { Section, ScLoader } from './styled';
import SearchHeader from './components/SearchHeader';
import SearchInitialContent from './components/SearchInitialContent';

class AddTrack extends Component {
    state = {
        value: '',
    }

    componentDidMount() {
        this.inputClearHandler();

        if (this.props.tracksLoaded === false) {
            this.props.getTracks();
        }
    }

    getSearchResults = _.debounce(300)(() => {
        this.props.getSearchResults(this.state.value);
    });

    addTrackHandler = (track) => {
        this.props.addTrack(track);
    };

    inputOnChangeHandler = (event) => {
        this.props.setSearchLoading();
        this.setState(
            { value: event.target.value },
            () => this.getSearchResults(),
        );
    };
    inputClearHandler = () => {
        this.setState(
            { value: '' },
            () => this.props.resetSearchResults(),
        );
    };
    render() {
        const {
            topTracks,
            tracksLoaded,
            results,
            loading,
        } = this.props;

        const ShownContent = this.state.value.length > 0 ?
            (
                <AddTrackResultsTable
                    tracks={results}
                    mutateButtonType="AddTrack"
                    tableMutateHandler={this.addTrackHandler}
                />
            ) : (
                <SearchInitialContent
                    topTracks={topTracks}
                    tracksLoaded={tracksLoaded}
                    addTrackHandler={this.addTrackHandler}
                />
            );

        return (
            <Section>
                <SearchHeader
                    searchValue={this.state.value}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                    inputClearHandler={this.inputClearHandler}
                />

                {loading ? <ScLoader /> : ShownContent }
                <BackgroundImage />
            </Section>
        );
    }
}

AddTrack.propTypes = {
    addTrack: PT.func,
    getSearchResults: PT.func.isRequired,
    getTracks: PT.func.isRequired,
    loading: PT.bool,
    resetSearchResults: PT.func.isRequired,
    results: PT.array,
    setSearchLoading: PT.func,
    topTracks: PT.array,
    tracksLoaded: PT.bool,
};

export default connect(state => ({
    loading: state.search.loading,
    results: state.search.results,
    topTracks: state.playlist.tracks,
    tracksLoaded: state.playlist.tracksLoaded,
}), {
    getSearchResults,
    resetSearchResults,
    setSearchLoading,
    addTrack,
    getTracks, // should be replaced by call getting toptracks data
})(AddTrack);
