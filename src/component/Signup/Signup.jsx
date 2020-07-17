import React from "react";
import "./signup.css";
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
                <h5>Create your Account</h5>
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    id="Input1"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    class="form-control"
                    id="Input1"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    class="form-control"
                    id="Input2"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    class="form-control"
                    id="Input2"
                    placeholder="Re Type Password"
                  />

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
