const router = require("express").Router();
const RegistrationForm = require("../components/RegistrationForm");
const User = require("../db/models");

router.get("/signup", (req, res) => {
  const html = res.renderComponent(RegistrationForm, { title: "registr form" });
  res.send(html);
});

router.post("/signup", (req, res) => {
  const { email, password, score = 0 } = req.body;
  res.app.locals.user = { email, password };
  res.app.locals.score = {score}
  console.log(req.app.locals);
  res.redirect("/");
});
module.exports = router;
