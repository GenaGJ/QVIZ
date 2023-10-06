const React = require('react');
const Layout = require('./Layout');

function Card({ question, questionIndex }) {
  return (
    <Layout>
      <div data-id={question.id} className="cardd">
        <div>
          <img
            src={`https://teamsoft.ru/upload/resize_cache/iblock/857/1920_700_2/857946358772e979cc7fb6cd01e6972a.webp`}
          />
        </div>
        <h2>{question.title}</h2>
        <div className="form-group">
          <input type="text" className='inputAnswer'/>
        </div>
        <div className="trueAnswer">
          <p>Верно</p>
        </div>
        <div className="falseAnswer">
          <p>Неверно</p>
          <p className='answerValue'>{question.answer}</p>
        </div>
        <button type="button" className="btnAnswer">
          Oтветить
        </button>
        <div>
          <a href={`${+questionIndex + 1}`} className="btnNext">
            Next
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Card;
