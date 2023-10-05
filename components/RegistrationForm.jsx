const React = require("react");
const Layout = require("./Layout");

function RegistrationForm({ user }) {
  return (
    <Layout user={user}>
      <div className="containt">
        <form action="/auth/signup" method="post">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="введите email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="введите пароль"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationForm;
