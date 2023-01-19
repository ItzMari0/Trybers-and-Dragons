"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("../../src/Archetypes");
const result = () => {
    const r = [];
    const m1 = new Archetypes_1.Mage('');
    r.push(Archetypes_1.Mage.createdArchetypeInstances());
    const m2 = new Archetypes_1.Mage('');
    r.push(Archetypes_1.Mage.createdArchetypeInstances());
    const m3 = new Archetypes_1.Mage('');
    r.push(Archetypes_1.Mage.createdArchetypeInstances());
    return r;
};
