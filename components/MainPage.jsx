const React = require('react');
const Layout = require('./Layout');

 
function Home({ title }) {
  return (
    <Layout title={title} >
        <div className="start-page">
      <h1>Добро пожаловать в QViz!</h1>
      <div className="theme-links">
        <a href="/theme1">Тема 1</a>
        <a href="/theme2">Тема 2</a>
        <a href="/theme3">Тема 3</a>
      </div>
    </div>

    </Layout>
  );
}

module.exports = Home;
