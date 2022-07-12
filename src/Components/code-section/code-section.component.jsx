import { Fragment } from "react";
import "./code-section.styles.scss";
const CodeSection = (props) => {
  return (
    <Fragment>
      <div className="codeSection">
        <p className="code">{props.name}</p>
      </div>
    </Fragment>
  );
};
export default CodeSection;
