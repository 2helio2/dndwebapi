const Monster = require('../Model/Monster.js')

module.exports = class MonsterController {
    constructor(app) {
        this.app = app;
    }

    initialize(res, params) {    
        const getModel = new Monster();
        getModel.getMonster(params.id).then((monster)=> {
            res.send(JSON.stringify(monster));
        });
    }
}