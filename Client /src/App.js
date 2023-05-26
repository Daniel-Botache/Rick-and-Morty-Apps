import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Cards from "./Components/Cards/Cards";
import Favorites from "./Components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (character) => {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${character}`
      );
      const data = response.data;
      if (data.name) {
        setCharacters((oldCharacters) => [...oldCharacters, data]);
      }
    } catch (error) {
      window.alert("No hay personajes con ese ID");
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const URL = "http://localhost:3001/rickandmorty/login/";
  const login = async (userData) => {
    try {
      const { username, password } = userData;
      const { data } = await axios(
        URL + `?username=${username}&password=${password}`
      );
      const { access } = data;
      setAccess(true);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
