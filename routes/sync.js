const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('@evnotify/middlewares').authenticationHandler;
const authorizationMiddleware = require('@evnotify/middlewares').authorizationHandler;
const syncController = require('../controllers/sync');

router.get('/:akey', authorizationMiddleware, authenticationMiddleware, syncController.getLatestSync);
router.post('/:akey', authorizationMiddleware, authenticationMiddleware, syncController.submitData);

module.exports = router;
