// + This file is the main router file that will be used to route to different model routers

import express from "express";
const router = express.Router();


router.use('/users', require('./users'));

module.exports = router;