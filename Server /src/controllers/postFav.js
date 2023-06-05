const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  console.log(req.body);
  try {
    const { id, name, image, species, gender } = req.body;

    if (!id || !name || !image || !species || !gender) {
      return res.status(404).send("Faltan datos");
    }
    await Favorite.findOrCreate({
      where: { id, name, image, species, gender },
    });
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postFav;
