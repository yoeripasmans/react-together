const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackSchema = new Schema({
    name: String,
    id: String,
    uri: String,
    artists: Array,
    album: Object,
    duration_ms: Number,
    likes: Number,
    userLiked: Array,
    addedBy: Object,
    isPlaying: Boolean,
    primaryColor: String,
}, {
    timestamps: true
});
// create a schema
const playlistSchema = new Schema(
{
    name: String,
	description: String,
	image: String,
	tracks: [trackSchema],
	restricted: Boolean,
	private: Boolean,
	password: String,
	users: Array,
	activeUsers: Array,
	admins: Array,
	createdBy: Object,
	rules: Object,
	qrCodeId: String,
	isPlaying: Boolean

}, {
      timestamps: true
});


// Set to user model
const Playlists = mongoose.model('Playlists', playlistSchema);

module.exports = Playlists;
