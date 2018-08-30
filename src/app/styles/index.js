import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

    body {
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    input[type=search] {
        -webkit-appearance: none;
    }
`;
