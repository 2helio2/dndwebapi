const Router = require('./Controller/Router.js');

module.exports = (expressServer) => {    
        const router = new Router(expressServer);
        router.initialize();
}

