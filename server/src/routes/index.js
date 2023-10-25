const { Router } = require("express");

const usersRouter = require("./Users/usersRouter");

const router = Router();

router.use("/user", usersRouter);

module.exports = router;
