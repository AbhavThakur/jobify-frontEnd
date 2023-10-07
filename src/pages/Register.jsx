import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

function Register() {
  return (
    <Wrapper>
      <div>
        <form className="form">
          <Logo />
          <h4>Register</h4>
          <FormRow type="text" name="name" label="Name" value="John" />
          <FormRow type="text" name="lastName" label="last Name" value="Doe" />
          <FormRow
            type="email"
            name="email"
            label="Email"
            value="john@gmail.com"
          />
          <FormRow type="text" name="location" label="Location" value="india" />
          <FormRow
            type="password"
            name="password"
            label="Password"
            value="John"
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
          <p>
            Already a member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
}

export default Register;
