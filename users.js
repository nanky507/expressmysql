var express = require('express');
var router = express.Router();

const usercontroller = require('../controllers/usercontroller')

/* GET users listing. */
router.get('/', usercontroller.index); //localhost:3000/api/users/

router.get('/:id', usercontroller.show);

router.post('/', usercontroller.insert);

router.put('/:id', usercontroller.update);

router.delete('/:id', usercontroller.destroy);

//router.get('/delete', usercontroller.delete);

module.exports = router;