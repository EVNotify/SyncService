module.exports = {
    apps : [{
      name: 'SyncService',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: true,
      env: {
        DB_USER: 'admin',
        DB_PASSWORD: 'admin',
        DB_HOST: 'localhost',
        DB_PORT: '27017',
        DB_NAME: 'evnotify',
        AUTHORIZATION_SERVICE: 'http://localhost:3001/authorization',
        AUTHENTICATION_SERVICE: 'http://localhost:3002/authentication',
        LOG_SERVICE: 'http://localhost:3005/logs'
      }
    }]
  };
  
