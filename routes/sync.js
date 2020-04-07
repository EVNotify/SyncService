const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('@evnotify/middlewares').authenticationHandler;
const authorizationMiddleware = require('@evnotify/middlewares').authorizationHandler;
const syncController = require('../controllers/sync');

router.post('/:akey', authorizationMiddleware, authenticationMiddleware, syncController.submitData);

module.exports = router;