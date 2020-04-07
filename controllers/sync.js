const asyncHandler = require('@evnotify/utils').asyncHandler;
const SettingsModel = require('../models/Settings');
const errors = require('../errors.json');

const deleteSettings = asyncHandler(async(req, res, next) => {
    await SettingsModel.deleteOne({
        akey: req.params.akey
    });

    res.status(204).end();
});

module.exports = {
    submitData
};