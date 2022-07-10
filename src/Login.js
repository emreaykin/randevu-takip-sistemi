import "./Login.css";

function Login() {
  
  return (
    <div>
      <div id="login-bg" class="container-fluid">
        <div class="bg-img"></div>
        <div class="bg-color"></div>
      </div>

      <div class="container" id="login">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="login">
              <h1>Login</h1>

              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  ></input>
                </div>

                <div class="form-check">
                  <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                  </label>
                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>

                  <label class="forgot-password">
                    <a href="#">Forgot Password?</a>
                  </label>
                </div>

                <button class="btn btn-lg btn-block btn-success">
                  <a href="dashboard">Forgot Password?</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
