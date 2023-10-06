const React = require("react");
//const score = require('../public/scripts/script')
function NavBar({ user , score}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HomePage
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/users">
                User
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/themes">
                GamesQuiz
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/auth/signup">
                SignUp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                {user && <li>Hello, Mr or Mrs {user.email}</li>}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link score">
                {score}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
