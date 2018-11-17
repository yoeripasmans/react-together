import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash/fp';
// import Loader from 'react-loader';

import { getSearchResults, resetSearchResults, setSearchLoading } from 'ducks/search';
import { addTrack } from 'ducks/playlist';

import SearchResultsTable from './components/SearchResultsTable';
import { Section, ScLoader } from './styled';
import SearchHeader from './components/SearchHeader';
import PersonalPlaylists from './components/PersonalPlaylists';

class AddTrack extends Component {
    state = {
        value: '',
    }

    componentDidMount() {
        this.inputClearHandler();
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
        const { results, loading } = this.props;

        const ShownContent = this.state.value.length > 0
            ? (<SearchResultsTable
                tracks={results}
                mutateButtonType="AddTrack"
                tableMutateHandler={this.addTrackHandler}
            />)
            : null;

        return (
            <Section>
                <SearchHeader
                    searchValue={this.state.value}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                    inputClearHandler={this.inputClearHandler}
                />

                {loading ? <ScLoader /> : ShownContent }
            </Section>
        );
    }
}

AddTrack.propTypes = {
    getSearchResults: PT.func.isRequired,
    resetSearchResults: PT.func.isRequired,
    setSearchLoading: PT.func,
    addTrack: PT.func,
    results: PT.array,
    loading: PT.bool,
};

export default connect(state => ({
    results: state.search.results,
    loading: state.search.loading,
}), {
    getSearchResults,
    resetSearchResults,
    setSearchLoading,
    addTrack,
})(AddTrack);
