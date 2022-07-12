import { Fragment } from "react";
import "./Home.style.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="heading-container">
          <h1 className="heading">Learn React</h1>
          <p className="sub-heading">
            We make better web application while Learning react!
          </p>
        </div>
        <div>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
