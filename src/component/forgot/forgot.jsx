import React from "react";
import "./forgot.css";
import logo from "./logo2.jpg";

function signup() {
  return (
    <>
      <header className="App-header">
        <table>
          <tr>
            <td>
              <form className="signup">
                <img src={logo} alt="logo" class="img" />
                <h5>
                  <b>Forgot Password</b>
                </h5>
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    id="Input1"
                    placeholder="Enter email and click the Send button"
                  />

                  <input
                    type="password"
                    class="form-control"
                    id="Input2"
                    placeholder="Enter pin number "
                  />
                  <p>
                    <b>Enter pin number which received to your email address</b>
                  </p>

                  <button
                    type="button"
                    id="button"
                    class="btn btn-info btn-lg btn-block"
                  >
                    Send
                  </button>

                  <button
                    type="button"
                    id="button"
                    class="btn btn-info btn-lg btn-block"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </table>
      </header>
    </>
  );
}

export default signup;
