"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Ranger._instances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Ranger._instances;
    }
}
exports.default = Ranger;
Ranger._instances = 0;
