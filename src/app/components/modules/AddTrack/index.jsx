import React, { Component } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash/fp';

import { getSearchResults, resetSearchResults } from 'ducks/search';

import TrackTable from 'common/TrackTable';
import SearchHeader from './components/SearchHeader';

const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0);
`;

class AddTrack extends Component {
    state = {
        value: '',
    }

    getSearchResults = _.debounce(300)(() => {
        this.props.getSearchResults(this.state.value);
    });

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
        const { results } = this.props;
        return (
            <Section>
                <SearchHeader
                    searchValue={this.state.value}
                    inputOnChangeHandler={this.inputOnChangeHandler}
                    inputClearHandler={this.inputClearHandler}
                />
                <TrackTable tracks={results} />
            </Section>
        );
    }
}

AddTrack.propTypes = {
    getSearchResults: PT.func.isRequired,
    resetSearchResults: PT.func.isRequired,
    results: PT.array,
};

export default connect(state => ({
    results: state.search.results,
}), { getSearchResults, resetSearchResults })(AddTrack);
