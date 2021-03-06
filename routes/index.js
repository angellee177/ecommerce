const router = require('express').Router();
const authRoute = require('./authRouter');
const userRoute = require('./userRouter');
const productRoute = require('./productRouter');
const uploadRoute = require('./productPicture');
const orderRoute = require('./orderRouter');

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/product', uploadRoute);
router.use('/order', orderRoute);

module.exports = router;

