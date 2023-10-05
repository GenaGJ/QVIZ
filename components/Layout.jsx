const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link href="/style.css" rel="stylesheet" /> 
      </head>
      <body>{children}</body>
    </html>
  );
};
