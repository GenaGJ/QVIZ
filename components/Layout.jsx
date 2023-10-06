const React = require("react");
const NavBar = require("./NavBar");
// пропсы
function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link href="/styles/style.css" rel="stylesheet" />
        <script defer src="/scripts/script.js" />
      </head>
      <NavBar user={user} />
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
