import { Conditions } from './Conditions';

export class Entity {
    name: string;
    maxHp: number;
    currentHp: number;
    armorClass: number;
    initiativeMod: number;
    initiativeTotal: number;
    type: string;
    condition = new Conditions();
}
