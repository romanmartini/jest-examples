const axios = require('axios').default;

class Users {
  static async all(a) {
    if (a) return false;
    const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
  }
}

module.exports = {
  Users
}