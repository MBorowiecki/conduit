import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ApplicationContext } from "core/context";

import { NavItem } from "./NavItem.component";

const Navbar = (): JSX.Element => {
  const location = useLocation();
  const { userProfile } = useContext(ApplicationContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/#">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <NavItem className={`${IsActiveRoute(location.pathname, "/", true) && "active"}`} link="/">
            Home
          </NavItem>
          {userProfile && (
            <NavItem className={`${IsActiveRoute(location.pathname, "/editor") && "active"}`} link="/editor">
              <i className="ion-compose" />
              &nbsp;New Article
            </NavItem>
          )}
          {userProfile && (
            <NavItem className={`${IsActiveRoute(location.pathname, "/settings") && "active"}`} link="/settings">
              <i className="ion-gear-a" />
              &nbsp;Settings
            </NavItem>
          )}
          {!userProfile && (
            <NavItem className={`${IsActiveRoute(location.pathname, "/login") && "active"}`} link="/login">
              Sign in
            </NavItem>
          )}
          {/* TODO: Uncomment when register feature introduced */}
          {/* {!userProfile && (
            <NavItem className={`${IsActiveRoute(location.pathname, "/register") && "active"}`} link="/register">
              Sign Up
            </NavItem>
          )} */}
          {userProfile && (
            <NavItem
              className={`${IsActiveRoute(location.pathname, "/profile") && "active"}`}
              link={`/profile/${userProfile.username}`}
            >
              Profile
            </NavItem>
          )}
        </ul>
      </div>
    </nav>
  );
};

const IsActiveRoute = (currentPathname: string, desiredPathname: string, exact = false): boolean => {
  return exact ? currentPathname === desiredPathname : currentPathname.startsWith(desiredPathname);
};

export default Navbar;
