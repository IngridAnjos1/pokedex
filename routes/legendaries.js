const express = require('express')
const router = express.Router();
const controller = require ('../controllers/legendariesController');
const auth = require ('../middlewares/auth')
const legendaryValidator = require ('../middlewares/legendaryValidator')

router.get('/', controller.index);
router.post('/', auth, legendaryValidator, controller.create);

module.exports = router;


