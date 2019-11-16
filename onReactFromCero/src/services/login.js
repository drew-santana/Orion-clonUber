const service = 'http://localhost:3000/api/users/?correo=';

const confingService = {
  method: 'GET',
  mode: 'no-cors',
};

const callToLogin = (mail) => {
  return new Promise((resolve, reject) => {
    fetch(`${service}${mail}`, confingService)
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default callToLogin;
