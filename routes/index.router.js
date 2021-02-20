const data = require('./data.router');
function routes(app) {
    app.use('/api', data);
    
}

module.exports = routes;