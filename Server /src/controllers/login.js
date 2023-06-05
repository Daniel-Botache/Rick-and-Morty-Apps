/* const users = require("../utils/users");
const login = (req, res) => {
  const { username, password } = req.query;
  const userFound = users.find(
    (user) => user.username === username && user.password === password
  );
  return userFound
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false });
};

module.exports = {
  login,
}; */

const { User } = require("../DB_connection");
const login = async (req, res) => {
  try {
    const { username, password } = req.query;
    if (!username || !password) return res.status(400).send("Faltan datos");
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).send("Usuario no encontrado");
    if (user.password != password) {
      return res.status(403).send("Contraseña incorrecta");
    }
    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  login,
};
