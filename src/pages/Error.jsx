import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={errorImg} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>we can`t seem to find the page you`re looking for</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Error</h1>
      <h3>{error.statusText || error.message}</h3>
      <img src={errorImg} alt="not found" />
      <Link to="/dashboard">back Home</Link>
    </Wrapper>
  );
}

export default Error;
