const router =  require('express').Router()
const userController = require('../controllers/user.controller')


router.get('/', userController.list);
router.get('/:id', userController.get);
router.post('/', userController.create);
router.delete('/:id', userController.remove);

module.exports = router;



