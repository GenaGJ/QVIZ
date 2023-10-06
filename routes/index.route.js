const router = require("express").Router();
const mainRouter = require("./main.routes");
const authRouter = require("./auth.route");
const themeRouter = require("./themes.routes");

router.use("/", mainRouter);
router.use("/auth", authRouter);
router.use("/theme", themeRouter);

module.exports = router;
