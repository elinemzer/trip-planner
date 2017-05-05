const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/trip-planner');

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.,
    allowNull: false
  }
})

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars:{
    type: Sequelize.FLOAT(1,5),
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.RANGE(Sequelize.INTEGER),
    allowNull: false
  }
})

// const Associations = db.define('associations', {
//
// })

module.exports = {
  db: db
}
