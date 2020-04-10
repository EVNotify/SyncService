const asyncHandler = require('@evnotify/utils').asyncHandler;
const HistoryModel = require('../models/History');
const SyncModel = require('../models/Sync');
const errors = require('../errors.json');

const submitData = asyncHandler(async(req, res, next) => {
    // TODO outsource this in @evnotify/utils?!
    if (req.params.akey !== req.headers.AKey) return next(errors.AKEY_MISMATCH);

    const syncObj = req.body;

    syncObj.akey = req.params.akey;
    // create a history record
    await HistoryModel.create(syncObj);
    // sync to log?! trigger
    // update last sync
    res.json(await SyncModel.updateOne({
        akey: req.params.akey
    }, req.body));
});

module.exports = {
    submitData
};