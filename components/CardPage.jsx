const React = require("react");
const Layout = require("./Layout");

function Card({ question, questionIndex }) {
  return (
    <Layout>
      <div className="cardd">
        <div>
          <img
            src={`https://teamsoft.ru/upload/resize_cache/iblock/857/1920_700_2/857946358772e979cc7fb6cd01e6972a.webp`}
          />
        </div>
        <form data-id={question.id} className="answerForm" method="POST" action="/">
          <h2>{question.title}</h2>
          <div className="form-group">
            <input name= 'answer' type="text" className='inputAnswer form-control'/>
          </div>
          <div className="trueAnswer">
            <p>Верно</p>
          </div>
          <div className="falseAnswer">
            <p>Неверно</p>
            <p className='answerValue'>Правильный ответ: {question.answer}</p>
          </div>
          <button type="submit" className="btnAnswer btn btn-warning">
            Oтветить
          </button>
          <div>
            <a href={`${+questionIndex + 1}`} className="btnNext">
              Next
            </a>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Card;
