import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  const [errors, setErrors] = useState({});
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button>Login</button>
    </form>
  );
};
export default Form;
