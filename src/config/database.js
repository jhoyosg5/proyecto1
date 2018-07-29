var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  //localhost
  development: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'Proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyecto1-dev'
  },
  //DCA
  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'Proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/proyecto1-test'
  },
  //Amazon
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