const MonstersController = require('./Monster.js')
const BestiarioController = require('./Bestiario.js')

module.exports = class Router {
    constructor(expressApp) {
        this.app = expressApp;
    }

    initialize() {
        this.getMonster();
    }

    getMonster() {
        this.app.get('/monsters/:id', (req, res) => {
            const monsterController = new MonstersController();
            monsterController.initialize(res, req);
        });

        this.app.get('/monsters/:id/:content', (req, res) => {
            const monsterController = new MonstersController();
            monsterController.initialize(res, req);
        });

        this.app.get('/bestiario/:from-:to', (req, res) => {
            const bestiarioController = new BestiarioController();
            bestiarioController.initialize(res, req);
        });
    }
}