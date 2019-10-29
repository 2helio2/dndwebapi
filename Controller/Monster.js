const Monster = require('../Model/Monster.js');
const cache = require('memory-cache');
const Utils = require('../Utils.js');

module.exports = class MonsterController {
    constructor(app) {
        this.app = app;
    }

    initialize(res, req) {    
        const getModel = new Monster();
        let key = '_express_' + req.originalUrl || req.url;
        let savedMonsterCache = cache.get(key);

        if(savedMonsterCache) {
            res.send(JSON.stringify(savedMonsterCache));
        } else {
            getModel.getMonster(req.params.id, req.params.content).then((monster)=> {
                cache.put(key, monster, Utils.cacheTime(1));
                res.send(JSON.stringify(monster));
            });
        }
    }
}