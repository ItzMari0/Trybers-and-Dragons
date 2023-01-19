"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Warrior._instances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Warrior._instances;
    }
}
exports.default = Warrior;
Warrior._instances = 0;
