import { Link } from "react-router-dom";

import { INavItemProps } from "../interfaces";

export const NavItem = ({ children, className, link }: INavItemProps): JSX.Element => {
  return (
    <li className="nav-item">
      <Link className={`nav-link ${className}`} to={link}>
        {children}
      </Link>
    </li>
  );
};
