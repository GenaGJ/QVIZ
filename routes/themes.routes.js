const router = require("express").Router();
const { Theme, Question } = require('../db/models');
const Card = require('../components/CardPage')

router.get("/:themeId/question/:questionIndex", async (req, res) => {
    try {
        const { themeId, questionIndex } = req.params;
        const questions = await Question.findAll({ where: { theme_id: themeId} });
        if(+questionIndex + 1 > questions.length){
          res.redirect('/')
        }
        else{
          const html = res.renderComponent(Card, { title: 'card page', question: questions[questionIndex], questionIndex});
          res.send(html);
          
        }
      } catch ({ message }) {
        res.json({ message });
      }
});
module.exports = router;
