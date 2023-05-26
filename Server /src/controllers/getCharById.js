/* const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)

    .then(({ name, gender, species, origin, image, status }) => {
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(error.message);
    });
};

module.exports = { getCharById };
 */
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}${id}`);
    const { name, gender, species, origin, image, status } = response.data;
    if (!name) throw new Error("ID not found");

    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
    return res.status(200).json(character);

    /* return res.status(404).send("Not found"); */
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
