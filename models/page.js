const { db } = require('./index');

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

module.exports = { Page, User };
