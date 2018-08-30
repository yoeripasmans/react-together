import React from 'react';
import TrackCategoryRow from './components/TrackCategoryRow';

const Tracktable = ({ rows }) => (
    <table>
        <TrackCategoryRow />
        <tbody>{rows}</tbody>
    </table>
);

export default Tracktable;
