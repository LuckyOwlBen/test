import { Conditions } from './Conditions';

export class Entity {
    private conditionObject = new Conditions();
    name: string;
    maxHp: number;
    currentHp: number;
    armorClass: number;
    initiativeMod: number;
    initiativeTotal: number;
    type: string;
    advantage: boolean;
    disadvantage: boolean;
    condition = this.convertConditonsToMap(this.conditionObject);

    private convertConditonsToMap(conditionObject: Conditions): Map<string, boolean> {
      let iterator = 0;
      let conditionKeys: string[] = new Array();
      let conditionValues: boolean[] =  new Array();
      const conditionMap = new Map<string, boolean>();

      conditionKeys = Object.keys(conditionObject);
      conditionValues = Object.values(conditionObject);
      conditionKeys.forEach(element => {
        conditionMap.set(element, conditionValues[iterator]);
        iterator++;
      });
      return conditionMap;
    }
}
