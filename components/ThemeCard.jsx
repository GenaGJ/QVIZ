// const React = require("react");

// function ThemeCard({ theme }) {
//   return (
//     <div className="m-50">
//       <a href="#" className="start-page-link">
//         {theme.title}
//       </a>
//     </div>
//   );
// }

// module.exports = ThemeCard;
const React = require("react");

function ThemeCard({ theme }) {
  return (
    <div className="m-50">
      <a href="#" className="start-page-link">
        {theme.title}
      </a>
    </div>
  );
}

module.exports = ThemeCard;
