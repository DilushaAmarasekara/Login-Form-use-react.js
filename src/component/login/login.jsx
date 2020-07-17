import React from "react";
import "./login.css";
import logo from "./logo2.jpg";

import { GoogleLogin, responseGoogle } from "react-google-login";

function Login() {
  return (
    <div>
      <header className="App-header">
        <table>
          <tr>
            <td>
              <form className="login">
                <img src={logo} alt="logo" class="img" />
                <h5>
                  <b>Loging to your Account</b>
                </h5>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="Input1"
                    placeholder="User Name"
                  />

                  <input
                    type="password"
                    class="form-control"
                    id="Input2"
                    placeholder="Password"
                  />

                  <a href="forgot">
                    <p class="forgot">
                      <b>Forgot Password</b>
                    </p>
                  </a>

                  <button
                    type="button"
                    id="button"
                    class="btn btn-info btn-lg btn-block"
                  >
                    <b>Continue</b>
                  </button>
                  <p>
                    <b>OR</b>
                  </p>

                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="         You can Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />

                  <p id="last">
                    <b>Can't Login </b>
                    <a href="signup">Sign Up</a>
                    <b> for Account</b>
                  </p>
                </div>
              </form>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default Login;
