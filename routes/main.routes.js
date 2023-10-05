const router = require('express').Router();
const MainPage = require('../components/MainPage');
const {Theme} = require('../db/models')

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  console.log(themes);
  const html = res.renderComponent(MainPage, { title: 'Main page', themes});
  res.send(html);
});

module.exports = router;
