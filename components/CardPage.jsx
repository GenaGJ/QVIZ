const React = require('react');

function Card({question }) {
  return (
    <div  data-id={question.id}  className='cardd'>
      <div>
        <a href={`/questions/${question.id}`}>
          <img src={`https://teamsoft.ru/upload/resize_cache/iblock/857/1920_700_2/857946358772e979cc7fb6cd01e6972a.webp`} />
        </a>
      </div>
      <h2>{question.title}</h2>
      <input> </input>
      <button type='button' className="btnAnswer" >Oтветить</button>
      <button type='button' className="btnNext" >Next</button>

    </div>
  );
}

module.exports = Card;