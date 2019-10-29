const Bestiario = require('../Model/Bestiario.js')
const cache = require('memory-cache');

module.exports = class BestiarioController {
    constructor(app) {
        this.app = app;
    }

    initialize(res, req) {    
        const getModel = new Bestiario();
        getModel.getBestiario(req.params).then((bestiario)=> {
            const monsterPromises = [];
            let key = '_express_' + req.originalUrl || req.url;
            let monsterCache = cache.get(key);

            if(monsterCache) {
                res.send(JSON.stringify(monsterCache));
            } else {
                bestiario.beasts.forEach(beast => {
                    monsterPromises.push(beast.data.getMonster());
                });
    
                Promise.all(monsterPromises).then((responses) => {
                    cache.put(key, responses, 10000);
                    res.send(JSON.stringify(responses));
                });
            }            
        });
    }
}