import React, { useState, useEffect } from "react";
import axios from "axios";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserPromise();
    fetchUsersAsync();
  }, []);

  const fetchUserPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => console.log(e));
  };

  const fetchUsersAsync = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users "
    );
    console.log(result.data);
  };
  return (
    <div>
      <h3>Lets learn Async and Wait in react</h3>
    </div>
  );
};
export default AsyncAwait;
