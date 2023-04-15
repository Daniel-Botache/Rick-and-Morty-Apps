import style from "./Card.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { addFav, deleteFav } from "../../redux/actions";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }
  componentDidMount() {
    this.props.myFavorites.forEach((fav) => {
      if (fav.id === this.props.id) {
        this.setState({ isFav: true });
      }
    });
  }
  handleFavorite = () => {
    if (this.state.isFav) {
      this.setState({ isFav: false });
      this.props.deleteFav(this.props.id);
    } else {
      this.setState({ isFav: true });
      this.props.addFav(this.props);
    }
  };

  render() {
    return (
      <div className={style.contenedor}>
        <button onClick={this.handleFavorite}>
          {this.state.isFav ? "❤️" : "🤍"}
        </button>
        <div className={style.nameContainer}>
          <button
            onClick={() => this.props.onClose(this.props.id)}
            className={style.button}
          >
            X
          </button>
          <Link to={`/detail/${this.props.id}`}>
            <h2 className={style.titulo}>{this.props.name}</h2>
          </Link>
        </div>
        <div className={style.imgContainer}>
          <img src={this.props.image} alt="" className={style.img} />
        </div>
        <div className={style.descriptionContainer}>
          <h2 className={style.titulo}>{this.props.species}</h2>
          <h2 className={style.titulo}>{this.props.gender}</h2>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    deleteFav: (id) => {
      dispatch(deleteFav(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
/* 
export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <div className={style.nameContainer}>
        <button
          onClick={() => props.onClose(props.id)}
          className={style.button}
        >
          X
        </button>
        <Link to={`/detail/${props.id}`}>
          <h2 className={style.titulo}>{props.name}</h2>
        </Link>
      </div>
      <div className={style.imgContainer}>
        <img src={props.image} alt="" className={style.img} />
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={style.titulo}>{props.species}</h2>
        <h2 className={style.titulo}>{props.gender}</h2>
      </div>
    </div>
  );
}
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
 */
