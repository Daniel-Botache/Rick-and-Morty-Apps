import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.navContainer}>
      <div className={style.tittleContainer}>
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
    </div>
      <Link to="/home" className={style.navLink}>Home</Link>
      <Link to="/about" className={style.navLink}>About</Link>
      <Link to="/favorites"className={style.navLink}>Favorites</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
