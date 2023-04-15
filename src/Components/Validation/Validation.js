const validation = (userData) => {
  const errors = {};
  if (
    !/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(
      userData.username
    )
  ) {
    errors.username = "El usuario ingresado no es válido";
  }
  if (!userData.username) {
    errors.username = "Usuario no puede estar vacio";
  }
  if (userData.username.length > 35) {
    errors.username = "El usuario no puede superar los 35 caracteres";
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "la contraseña debe contener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "la contraseña debe tener un tamaño entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
