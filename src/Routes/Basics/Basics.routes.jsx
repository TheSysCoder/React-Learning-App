import { Fragment } from "react";
import { employee, students } from "./data";
import { useState } from "react";
import PropsData from "../../Components/props-component/props.component";
const Basics = () => {
  // declaring variables
  const firstName = "Pruthviraj";
  const lastName = "Sonawane";
  const arr = [2, 4, "Mark", true];

  // destructure object using spread operator
  const emp = { ...employee };

  // use hooks
  const [color, setColor] = useState("red");
  const changeColorName = () => {
    setColor("blue");
  };
  return (
    <Fragment>
      <div className="variable">
        <h2>Basic React js concepts</h2>
        <h3>Variable</h3>
        <p>
          Using <strong>Const</strong> and <strong>let</strong> keyword we can
          declare variables in javascript.
        </p>
        <p>
          Exmpale: <strong>const firstName = "Pruthviraj";</strong>
        </p>
        <p>
          Welcome {firstName} {lastName}
        </p>
      </div>
      <hr />
      <h2>Array in Javascript</h2>
      <p>const arr = [2,4,"mark", true]</p>
      <p>map function is used to iterate array</p>
      <div>
        {arr.map((ele) => {
          return <p key={ele}>{ele}</p>;
        })}
      </div>
      <p>Push element in array</p>
      <div>{arr.push("Apple")}</div>
      <div>
        <p>Updated array</p>
        {arr.map((ele) => {
          return <p key={ele}>{ele}</p>;
        })}
      </div>
      <hr />
      <div>
        <h2>Objects in Javascript</h2>
        <p>Create object and show</p>
        <table border={1}>
          <tr>
            <th>Empolyee Name</th>
            <th>Empolyee Job</th>
            <th>Empolyee Salary</th>
          </tr>
          <tr>
            <td>{emp.name}</td>
            <td>{emp.job}</td>
            <td>{emp.salary}</td>
          </tr>
        </table>
      </div>
      <hr />
      <div>
        <h2>Hooks in React</h2>
        <p>Use useState hooks here</p>
        <p>Current color is {color}</p>
        <button onClick={changeColorName}>Change Color Name</button>
      </div>
      <hr />
      <div>
        <h3>Props in react</h3>
        <PropsData students={students} />
      </div>
    </Fragment>
  );
};
export default Basics;
