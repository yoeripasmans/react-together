import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

    body {
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: #000;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    main {
        max-width: 70rem;
        margin: 0 auto;
        padding: 0 1rem;
    }

    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.7em;
        font-weight: 600;
    }

    input[type=search] {
        -webkit-appearance: none;
    }
`;
