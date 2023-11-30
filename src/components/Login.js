import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";


export default function Login({
  username,
  setUsername,
  password,
  setPassword,
}) {
  const navigate = useNavigate();
  function loginUser(event) {
    event?.preventDefault();
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.success) {
          alert(result.success);
          navigate(`/dashboard`);
        } else {
          alert(result.message);
        }
      })
      .catch(console.error);
  }

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <div className="title">
          Sign in to our file manager below!
        </div>
        <div>
          <form
            className="login-form"
            autoComplete="off"
            onSubmit={(event) => {
              loginUser(event);
            }}
          >
            <p>Username</p>
            <input
              required
              className="input-field"
              id="standard-basic"
              label="Username"
              size="small"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <p>Password</p>
            <input
              required
              className="input-field"
              id="standard-basic"
              label="Password"
              size="small"
              type="password"
              inputProps={{ pattern: ".{7,}" }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              type="submit"
              variant="contained"
              color="primary"
              id="loginBtn"
            >
              LOG IN
            </button>
          </form>
          <div>
            <p>Don't have an account?</p>
            <Link to="/register">
              <p>Register here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
