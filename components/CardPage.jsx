const React = require('react');
const Layout = require('./Layout');

function Card({question}) {
  console.log(question);
  return (
    <Layout>
      <div  data-id={question.id}  className='cardd'>
        <div>
          
            <img src={`https://teamsoft.ru/upload/resize_cache/iblock/857/1920_700_2/857946358772e979cc7fb6cd01e6972a.webp`} />
          
        </div>
        <h2>{question.title}</h2>
        <button type='button' className="btnAnswer" >Oтветить</button>
        <button type='button' className="btnNext" >Next</button>
      </div>
    </Layout>
  );
}

module.exports = Card;