const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const userRouter = require('./userRouter')
const autorRouter = require('./autorRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/autor', autorRouter)
router.use('/book', bookRouter)

module.exports = router