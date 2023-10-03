import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Dashboard,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
} from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
