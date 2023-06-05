const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id } });
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = { deleteFav };
