const express = require('express');
const router = express.Router();
const dataController = require('../controller/data.controller');
const middleware = require('../middleware/data.middleware')

router.post('/add-data',middleware.add_data, dataController.add_data);
router.post('/check-data',middleware.check_data, dataController.check_data);
router.post('/del-data',middleware.delete_data, dataController.delete_data);

module.exports = router;