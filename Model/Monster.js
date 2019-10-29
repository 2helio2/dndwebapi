const axios = require('axios');
const utils = require('../Utils.js');

module.exports = class Monster {
    constructor(index, name, size, type, subtype, alignment, armor_class, hit_points, hit_dice) {
        this.index = index;
        this.name = name;
        this.size = size;
        this.type = type;
        this.subtype = subtype;
        this.alignment = alignment;
        this.armor_class = armor_class;
        this.hit_points = hit_points;
        this.hit_dice = hit_dice;
        this.baseUrl = utils.baseUrl + 'monsters/';
    }

    async getMonster(monsterId, content) {
        const url = !!monsterId ? this.baseUrl + monsterId : this.baseUrl;

        if(content !== 'full') {
            return await new Promise(resolve => {
                axios.get(url).then(resp => {
                    const fullDataMonster  = resp.data;
                    this.index = fullDataMonster.index;
                    this.name = fullDataMonster.name;
                    this.size = fullDataMonster.size;
                    this.type = fullDataMonster.type;
                    this.subtype = fullDataMonster.subtype;
                    this.alignment = fullDataMonster.alignment;
                    this.armor_class = fullDataMonster.armor_class;
                    this.hit_points = fullDataMonster.hit_points;
                    this.hit_dice = fullDataMonster.hit_dice;
    
                    resolve(this);
                });
            });
        } else {
            return await new Promise(resolve => {
                axios.get(url).then(resp => {
                    const fullDataMonster  = resp.data;
                    Object.assign(this, fullDataMonster);
    
                    resolve(this);
                });
            });
        }
        
    }
}