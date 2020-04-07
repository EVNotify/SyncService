const mongoose = require('mongoose');
const connection = require('@evnotify/utils').db.getDB();

const TelemetrySchema = require('./Telemetry');
const LocationSchema = require('./Location');

const options = {
    id: false,
    collection: 'sync',
    timestamps: true,
    toObject: {
        getters: true
    },
    versionKey: false
};

const SyncSchema = new mongoose.Schema({
    akey: {
        type: String,
        required: true,
        unique: true
    },
    telemetry: TelemetrySchema,
    location: LocationSchema
}, options);

module.exports = connection.model('Sync', SyncSchema);