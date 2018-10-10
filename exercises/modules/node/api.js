const data = require('./data');

const API = {};

API.getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = data.users.find(user => user.id === id)
    cb(user)
  }, 150)
}

API.getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = data.posts.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = API;