import { Fragment } from "react";
import AsyncAwait from "../../Components/async-await/async-await";
import ClassComponent from "../../Components/classComponent/class.component";

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`hello, my name is ${this.name}`);
  }
}

const Advance = () => {
  const userData = {
    name: "Jake",
    age: 45,
  };
  console.log(userData);
  const userObj = new User("Jame", 34);
  console.log(userObj);
  userObj.greetings();
  return (
    <Fragment>
      <div>THis is Advance</div>
      <ClassComponent />
      <AsyncAwait />
    </Fragment>
  );
};
export default Advance;
