import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to="/dashboard">back Home</Link>
    </div>
  );
}

export default Error;
