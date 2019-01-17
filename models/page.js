const db = require('./index');

const Page = db.define('page', {
  title : Sequelize.STRING,
  slug: Sequelize.string,
  status: Sequelize.BOOLEAN,
  content: Sequelize.string
})
