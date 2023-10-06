const React = require("react");
const NavBar = require("./NavBar");
// пропсы
function Layout({ title, children, user, score }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link href="/styles/style.css" rel="stylesheet" />
        <script defer src="/scripts/script.js" />
      </head>
      <NavBar user={user} score={score}/>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
