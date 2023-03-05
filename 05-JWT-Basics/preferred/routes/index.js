const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/index')

const appAuthenticator = require('../middleware/authenticator')

// router.post('/api/v1/logon', logon)
router.route('/api/v1/logon').post(logon)

// router.get('/api/v1/hello', hello)
router.route('/api/v1/hello').get(appAuthenticator, hello)



module.exports = router;

