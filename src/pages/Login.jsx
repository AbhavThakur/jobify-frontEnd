import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

/**
 * Renders the login form component.
 *
 * @return {JSX.Element} The login form component.
 */
function Login() {
  return (
    <Wrapper>
      <div>
        <form className="form">
          <Logo />
          <h4>Login</h4>
          <FormRow
            type="email"
            name="email"
            label="Email"
            value="john@gmail.com"
          />
          <FormRow
            type="password"
            name="password"
            label="Password"
            value="John"
          />
          <button type="button" className="btn btn-block">
            submit
          </button>
          <button type="button" className="btn btn-block">
            Explore the app
          </button>
          <p>
            Not a member yet?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
}

export default Login;
