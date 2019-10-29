const axios = require('axios');
const utils = require('../Utils.js');

module.exports = class Monster {
    constructor(index, name, size, mtype, msubtype, alignment, armorClass, hitPoints, hitDice) {
        this.index = index;
        this.name = name;
        this.size = size;
        this.mtype = mtype;
        this.msubtype = msubtype; 
        this.alignment = alignment;
        this.armorClass = armorClass;
        this.hitPoints = hitPoints;
        this.hitDice = hitDice;
        this.baseUrl = utils.baseUrl + 'monsters/';
    }

    async getMonster(monsterId) {
        const url = !!monsterId ? this.baseUrl + monsterId : this.baseUrl;

        return await new Promise(resolve => {
            axios.get(url).then(resp => {
                const fullDataMonster  = resp.data;
                this.index = fullDataMonster.index;
                this.name = fullDataMonster.name;
                this.size = fullDataMonster.size;
                this.mtype = fullDataMonster.type;
                this.msubtype = fullDataMonster.subtype;
                this.alignment = fullDataMonster.alignment;
                this.armorClass = fullDataMonster.armor_class;
                this.hitPoints = fullDataMonster.hit_points;
                this.hitDice = fullDataMonster.hit_dice;

                resolve(this);
            });
        });
    }
}