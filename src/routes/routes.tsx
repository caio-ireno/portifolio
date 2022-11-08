import { RouteObject } from 'react-router-dom';
import Menu from '../components/Menu/Index';
import AboutMe from '../pages/AboutMe';
import Home from '../pages/Home';
import Portifolio from '../pages/Portifolio';

export default [
  {
    path: '/',
    element: [<Menu />],
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutMe /> },
      { path: '/portifolio', element: <Portifolio /> },
    ],
  },
] as Array<RouteObject>;
