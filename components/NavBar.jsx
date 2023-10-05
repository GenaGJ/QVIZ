const React = require("react");

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                {user && <li>Hello, Mr or Ms {user.email}</li>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
