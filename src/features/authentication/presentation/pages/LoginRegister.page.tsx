import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";

import { Navbar } from "core/navigation/components";
import { BasicInput } from "core/inputs";
import { FilledButton } from "core/buttons/components/FilledButton.component";
import { ApplicationContext } from "core/context";

import { useLoginUser } from "../hooks/useLoginUser.hook";

export const LoginRegister = (): JSX.Element => {
  const { setUserProfile, userProfile } = useContext(ApplicationContext);
  const { email, password, setEmail, setPassword, login } = useLoginUser();
  const history = useHistory();

  useEffect(() => {
    if (userProfile !== undefined) {
      history.replace("/");
    }
  }, [userProfile, history]);

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a href="">Have an account?</a>
              </p>

              {/* TODO: When the registration is implemented make that message dynamic */}
              {/* <ul className="error-messages">
                <li>That email is already taken</li>
              </ul> */}

              <form>
                {/* TODO: Uncomment when implementing registration */}
                {/* <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                </fieldset> */}
                <BasicInput onChange={setEmail} placeholder="Email" type="email" value={email} />
                <BasicInput onChange={setPassword} placeholder="Password" type="password" value={password} />
                <FilledButton
                  className="btn-lg btn-primary pull-xs-right"
                  type="primary"
                  onClick={event => {
                    event.preventDefault();
                    login().then(userProfile => {
                      // TODO: Error handling
                      if (userProfile !== undefined) {
                        setUserProfile(userProfile);
                      } else {
                        console.log("Error");
                      }
                    });
                  }}
                >
                  Sign in
                </FilledButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <a href="/#" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};
