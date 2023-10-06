const React = require("react");
const Layout = require("./Layout");
const ThemeCard = require("../components/ThemeCard");

function Home({ title , themes = []}) {
  return (
    <Layout title={title} user={user}>
      <div className="start-page">
        <h1 className="start-page-title">QViz</h1>
        <div className="start-page-link-container">
          <div className="themeCard__container flex flex-dir-col align-item-center">
                    {themes.map((theme) => (
                        <ThemeCard theme={theme}/>
                    ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
module.exports = Home;
