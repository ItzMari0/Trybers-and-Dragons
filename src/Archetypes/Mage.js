"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Mage._instances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Mage._instances;
    }
}
exports.default = Mage;
Mage._instances = 0;
