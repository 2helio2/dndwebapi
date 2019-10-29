const axios = require('axios');
const utils = require('../Utils.js');
const Monster = require('./Monster.js');

module.exports = class Bestiario {
    constructor() {
        this.beasts = [];
    }

    async getBestiario(params) {
        const endpoint = 'monsters';
        const url = utils.baseUrl + endpoint;
        this.parameters = params;

        return await new Promise(resolve => {
            axios.get(url).then(resp => {
                const monstersList  = resp.data;
                this.beasts = monstersList.results.slice(parseInt(this.parameters.from), parseInt(this.parameters.to));
                this.beasts.forEach(beast => {
                    beast.data = new Monster()
                    beast.data.baseUrl = beast.url
                }) 

                resolve(this);
            })
        });
    }
}