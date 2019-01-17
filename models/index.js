const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title : Sequelize.STRING,
  slug: Sequelize.STRING,
  status: Sequelize.ENUM('open', 'closed'),
  content: Sequelize.TEXT
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = {
  db,
  Page,
  User
}
