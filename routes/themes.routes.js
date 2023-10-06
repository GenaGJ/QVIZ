const router = require("express").Router();
const { Theme, Question } = require('../db/models');
const Card = require('../components/CardPage')

router.get("/:themeId/question/:questionIndex", async (req, res) => {
    try {
        const { themeId, questionIndex } = req.params;
        const questions = await Question.findAll({ where: { theme_id: themeId} });
        const html = res.renderComponent(Card, { title: 'card page', question: questions[questionIndex]});
        res.send(html);
      } catch ({ message }) {
        res.json({ message });
      }
});
module.exports = router;
