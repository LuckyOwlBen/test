import { Speed } from './Speed';
import { Proficency } from './Proficency';
import { Senses } from './Senses';
import { Languages } from './Languages';
import { SpecialAbilities } from './SpecialAbilities';
import { Actions } from './Actions';
import { LegendaryActions } from './LegendaryActions';

export class Monster {
    id: string;
    index: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    armorClass: number;
    hitPoints: number;
    hitDice: string;
    speed: Speed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: Proficency [];
    damage_vulnerabilities= [];
    //Empty Objects...................
    damageResistances= [];
    damageImmunities= [];
    conditionImmunities= [];
    //Empty Objects...................
    senses: Senses;
    languages: Languages;
    challengeRating: number;
    specialAbilities: SpecialAbilities[];
    actions: Actions[];
    legendaryActions: LegendaryActions[];
    url: string;
}
