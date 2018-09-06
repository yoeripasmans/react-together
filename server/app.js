const express = require('express');
const dotenv = require('dotenv').load();

const app = express();
const routes = require('./routes/');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
const data = require('./data.json');
const db = require('./models/index');

const port = process.env.PORT || 5000;

// const api = require('./api');
// const auth = require('./auth');

// app.use('/auth', auth);
// app.use('/api', api(io));
app.use(cors());

const router = express.Router();

routes(router);

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send(data);
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
