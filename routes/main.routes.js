const router = require('express').Router();
const MainPage = require('../components/MainPage');
const {Theme, Question} = require('../db/models')

router.get('/', async (req, res) => {
  const themes = await Theme.findAll();
  const html = res.renderComponent(MainPage, { title: 'Main page', themes});
  res.send(html);
});


router.post('/', async (req, res) => {
  const {answer, id} = req.body
  if(answer){
    const trueAnswer = await Question.findOne({where : {id}})
    if(answer.toLowerCase() === trueAnswer.answer.toLowerCase()){
      res.json({message: 'success'})
    }
    else {
      res.json({message: 'false'})
    }
  }
});

module.exports = router;
