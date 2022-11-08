import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function Menu() {
  const ComponentToRender = NavBar;
  return (
    <ComponentToRender>
      <Outlet />
    </ComponentToRender>
  );
}
