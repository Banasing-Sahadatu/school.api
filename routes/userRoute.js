const { Router } = require('express')
const { addUser,loginUser, getUser } = require('../controllers/userController')

const router = Router();

router.post("/register",addUser).post('/login', loginUser)
router.get('/', getUser)


module.exports = router