var express = require('express');
var router = express.Router();
var parentsController = require('../controller/parents.controller')

/* GET home page. */
router.get('/', parentsController.getParents);
router.get('/get-parent/:parentID', parentsController.getParent);
router.post('/add-parent', parentsController.addParent);
router.delete('/delete-parent/:parentID', parentsController.deleteParent);

module.exports = router;
