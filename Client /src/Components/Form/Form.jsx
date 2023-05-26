import style from "./Form.module.css";
import { useState, useRef} from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
  const [usernameClicked, setUsernameClicked] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);
  const inputRefUser = useRef(null);
  const inputRefPass = useRef(null);
  const handleUsernameClick = () => {
    setUsernameClicked(true);
    inputRefUser.current.focus()
  };


  const handlePasswordClick = () => {
    setPasswordClicked(true);
    inputRefPass.current.focus()
  };

  const usernameDivClass = usernameClicked ? style.clicked : "";
  const passwordDivClass = passwordClicked ? style.clicked : "";
  const usernameLabelClass = usernameClicked ? style.hidden : "";
  const passwordLabelClass = passwordClicked ? style.hidden : "";

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
    setErrors(validation({ ...userData, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  return (
    
    <div className={style.portalContainer}>
    <div className={style.estrellas}></div>
    <div className={style.portal}></div>  
    <div className={style.title}>
    Rick
    <span className={style.spanTitle}>and</span>  
    Morty
    <span className={style.spanTitle}>APP</span> 
    </div>
    <div className={`${style.title} ${style.middle}`}>
    Rick
    <span className={style.spanTitle}>and</span>  
    Morty
    <span className={style.spanTitle}>APP</span> 
    </div>
    <div className={`${style.title} ${style.bottom}`}>
    Rick
    <span className={style.spanTitle}>and</span>  
    Morty
    <span className={style.spanTitle}>APP</span> 
    </div>
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        <h1 className={style.h1}>Login</h1>
        <div className={style.labelContainer1} >
        <div className={style.labelContainer} onClick={handleUsernameClick}>
          <label className={usernameLabelClass}>Username</label>
          <span htmlFor="username" className={`${usernameDivClass} ${style.span}`}>
            Username
          </span>
          <input
            onFocus={handleUsernameClick}
            ref={inputRefUser}
            className={usernameDivClass}
            type="text"
            id="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        </div>
        {errors.username && <p>{errors.username}</p>}
        <div className={style.labelContainer1} >
        <div className={style.labelContainer} onClick={handlePasswordClick}>
          <label className={passwordLabelClass }>Password</label>
          <span htmlFor="password" className={`${passwordDivClass} ${style.span}`}>
            Password
          </span>
          <input
            ref={inputRefPass}
            onFocus={handlePasswordClick}
            className={passwordDivClass}
            type="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        </div>
        {errors.password && <p>{errors.password}</p>}
        <button className={style.button}>Go in</button>
      </div>
    </form>
    
    </div>
  );
};

export default Form;