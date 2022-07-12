import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h3 className="logo">React Learning</h3>
        </Link>
        <div className="link-container">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/basics">
            Basics
          </Link>
          <Link className="links" to="/advance">
            Advance
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
