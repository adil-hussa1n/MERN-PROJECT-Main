import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Username from '../components/Username.jsx';
import Register from '../components/Register.jsx';
import Main from '../Shared/Main.jsx';
import Profile from '../components/Profile.jsx';
import Gallery from '../components/Gallery.jsx';
import SignIn from '../components/SignIn.jsx';
import About from '../components/About.jsx';
import Home from '../components/Home.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';
import Beach from '../components/Beach.jsx';
import Mountain from '../components/Mountain.jsx';
import Village from '../components/Village.jsx';
import Forest from '../components/Forest.jsx';
import Island from '../components/Island.jsx';
import Fort from '../components/Fort.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/beach',
        element: <Beach></Beach>,
      },
      {
        path: '/mountain',
        element: <Mountain></Mountain>,
      },
      {
        path: '/village',
        element: <Village></Village>,
      },
      {
        path: '/forest',
        element: <Forest></Forest>,
      },
      {
        path: '/island',
        element: <Island></Island>,
      },
      {
        path: '/fort',
        element: <Fort></Fort>,
      },
    ],
  },
]);

export default router;
