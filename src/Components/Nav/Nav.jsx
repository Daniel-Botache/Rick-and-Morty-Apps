import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
