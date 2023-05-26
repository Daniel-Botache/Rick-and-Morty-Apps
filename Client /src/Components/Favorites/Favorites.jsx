import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const [aux,setAux] = useState(false)
  const dispatch= useDispatch()
  const handleOrder =(event)=>{
    dispatch(orderCards(event.target.value))
    setAux(true)
  }
  const handleFilter=(event)=>{
    dispatch(filterCards(event.target.value))
  }

  return (
    <div className={style.container}>
       <h1 className={style.h1Fav}>Favorites</h1>
       <select name="" id="" onChange={handleOrder}>
        <option value="A">Ascnedente</option>
        <option value="D">Descendente</option>
       </select>
       <select name="" id="" onChange={handleFilter}>
       <option value="Male">Male</option>
       <option value="Female">Female</option>
       <option value="Genderless">Genderless</option>
       <option value="unknown">unknown</option>
       </select>
    <div className={style.favContainer}>
       <div className={style.estrellas}></div>
      {myFavorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
