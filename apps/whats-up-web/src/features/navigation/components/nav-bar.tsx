import { NavBarLocation } from './nav-bar-location';
import { NavBarTitle } from './nav-bar-title';

export function NavBar() {
  return (
    <div className="flex items-center justify-between p-2 bg-white border-b">
      <NavBarTitle />
      <NavBarLocation />
    </div>
  );
}
