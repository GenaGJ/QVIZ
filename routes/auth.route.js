const router = require("express").Router();
const RegistrationForm = require("../components/RegistrationForm");

router.get("/signup", (req, res) => {
  const html = res.renderComponent(RegistrationForm, { title: "registr form" });
  res.send(html);
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  res.app.locals.user = { email, password };
  console.log(req.app.locals);
  //   res.json({ message: "success" });
});
module.exports = router;
