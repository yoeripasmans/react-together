import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash/fp';
// import Loader from 'react-loader';

import { getSearchResults, resetSearchResults } from 'ducks/search';

import TrackTable from 'common/TrackTable';
import { Section, ScLoader } from './styled';
import SearchHeader from './components/SearchHeader';

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

    addTrackHandler = () => {
        // put add track functionality here
    };

    inputOnChangeHandler = (event) => {
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
        return (
            <Section>
                <SearchHeader
                    searchValue={this.state.value}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                    inputClearHandler={this.inputClearHandler}
                />

                {loading ? <ScLoader /> : <TrackTable
                    tracks={results}
                    mutateButtonType="AddTrack"
                    tableMutateHandler={this.addTrackHandler}
                />}
            </Section>
        );
    }
}

AddTrack.propTypes = {
    getSearchResults: PT.func.isRequired,
    resetSearchResults: PT.func.isRequired,
    results: PT.array,
    loading: PT.bool,
};

export default connect(state => ({
    results: state.search.results,
    loading: state.search.loading,
}), { getSearchResults, resetSearchResults })(AddTrack);
