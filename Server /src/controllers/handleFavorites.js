let myFavorites = [];

const postFav = (req, res) => {
  try {
    const character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);
    if (characterFound) throw Error("Existing character");
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
  } catch {
    return res.status(404).send("Existing character");
  }
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id != +id);
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
