const React = require("react");
const NavBar = require("./NavBar");
// пропсы
function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="style.css" />
        <link href="/styles/style.css" rel="stylesheet" />
        {/* <script defer src="/scripts/script.js" />
        <script defer src="/scripts/add.js" /> */}
      </head>
      <NavBar user={user} />
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
