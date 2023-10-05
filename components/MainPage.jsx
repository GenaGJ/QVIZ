const React = require('react');
const Layout = require('./Layout');

 
function Home({ title }) {
  return (
    <Layout title={title} >
     <div className="start-page">
      <h1 className="start-page-title">QViz</h1>
      <div className="start-page-link-container">
        <a href="/question/1" className="start-page-link">
          Тема 1
        </a>
        <a href="#" className="start-page-link">
          Тема 2
        </a>
        <a href="#" className="start-page-link">
          Тема 3
        </a>
      </div>
    </div>
    </Layout>
  );
}

module.exports = Home;
