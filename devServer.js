/* eslint no-console: 0 */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');
const renderFullPage = require('./src/server/helpers/renderFullPage');

const app = express();
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
    logLevel: 'error',
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.send(renderFullPage({}));
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
