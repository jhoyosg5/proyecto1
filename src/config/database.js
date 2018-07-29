var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  development: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'Proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyecto1-dev'
  },

  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'Proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/proyecto1-test'
  },

  production: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'Proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/proyecto1-prod'
  }
};

module.exports = config[env];