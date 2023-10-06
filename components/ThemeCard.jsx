const React = require("react");

function ThemeCard ({ theme }) {
  return (
    <div className="m-50">
          <a href={`/theme/${theme.id}/question/0`} className="start-page-link">{theme.title}</a>
    </div>
  );
}

module.exports = ThemeCard;
