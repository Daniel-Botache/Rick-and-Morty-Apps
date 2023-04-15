import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Cards from "./Components/Cards/Cards";
import Favorites from "./Components/Favorites/Favorites";

const username = "daniel.botache@gmail.com";
const password = "Daniel54+";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    const urlBase = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "c0ac20e631d0.4ec77abdeae3e87df064";
    fetch(`${urlBase}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };
  const location = useLocation();
  const [access, setAcces] = useState(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
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
