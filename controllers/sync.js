const axios = require('axios');
const asyncHandler = require('@evnotify/utils').asyncHandler;
const HistoryModel = require('../models/History');
const SyncModel = require('../models/Sync');
const errors = require('../errors.json');

const getLatestSync = asyncHandler(async (req, res, next) => {
    if (req.params.akey !== req.headers.akey) return next(errors.AKEY_MISMATCH);

    const lastSync = await SyncModel.findOne({
        akey: req.params.akey
    });

    res.json(lastSync || {});
});

const submitData = asyncHandler(async(req, res, next) => {
    // TODO outsource this in @evnotify/utils?!
    if (req.params.akey !== req.headers.akey) return next(errors.AKEY_MISMATCH);

    const syncObj = req.body;

    syncObj.akey = req.params.akey;
    // create a history record
    await HistoryModel.create(syncObj);

    // push to log service
    axios.post(process.env.LOG_SERVICE + '/' + syncObj.akey + '/latest', syncObj, {
        headers: {
            'Authorization': req.headers.authorization,
            'token': req.headers.token,
            'akey': syncObj.akey
        }
    }).then(async() => {
        // update last sync
        await SyncModel.updateOne({
            akey: syncObj.akey
        }, syncObj, {
            upsert: true
        });
        res.json(syncObj);
    }).catch((err) => {
        try {
            next(err.response.data.error || 500);
        } catch (error) {
            console.error(error);
            next(500);
        }
    });
});

module.exports = {
    getLatestSync,
    submitData
};
