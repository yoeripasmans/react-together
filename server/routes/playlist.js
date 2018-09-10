const playlistController = require('./../controllers/playlist.ctrl');

module.exports = (router) => {
    router
        .route('/playlists')
        .get(playlistController.getAll);

    router
        .route('/playlist/:id')
        .get(playlistController.getPlaylist);
};
