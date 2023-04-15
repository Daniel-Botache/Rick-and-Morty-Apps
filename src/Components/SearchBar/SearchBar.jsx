import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <input type="search" className={style.input} onChange={handleChange} />
      <button
        className={style.button}
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
