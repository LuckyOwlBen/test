import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor(
    private combatDataService: CombatDataService,
    public dialogRef: MatDialogRef<TargetComponent>,
  ) { }

  hit = false;
  currentEntity: Entity;
  target: Entity;
  change: number;
  advantage: number;
  conditionKeys: string[];
  addCondition = false;
  conditionalRoll: boolean;
  conditionTrigger: boolean;
  negatedAdvantage: boolean;

  ngOnInit() {
    this.currentEntity = this.combatDataService.getCurrentEntity();
    this.target = this.combatDataService.getTarget();
    this.conditionKeys = Array.from(this.target.condition.keys());
    this.grantsAdvantage();
    this.grantsDisadvantage();
    if(this.currentEntity.advantage && this.currentEntity.disadvantage) {
        this.conditionalRoll = false;
        this.negatedAdvantage = true;
    } else if (this.currentEntity.advantage || this.currentEntity.disadvantage){
      this.conditionalRoll = true;
      this.negatedAdvantage = false;
    } else {
      this.conditionalRoll = false;
      this.negatedAdvantage = false;
    }
  }

  attackRoll(attack: number) {
    if (Number.isInteger(attack)) {
      if (attack >= this.target.armorClass) {
        this.hit = true;
        this.change = null;
        this.conditionTrigger = false;
        if(this.conditionalRoll){
          this.conditionTrigger = true;
          this.conditionalRoll = false;
        }
      }
    }
  }

  specialRoll(regular: number, second: number){
    if(this.currentEntity.advantage) {
      if(regular > second){
        this.attackRoll(regular);
      } else{
        this.attackRoll(second);
      }
    }
    if(this.currentEntity.disadvantage) {
      if(regular < second){
        this.attackRoll(regular);
      } else{
        this.attackRoll(second);
      }
    }
  }

  damageTarget(damage) {
    if (Number.isInteger(damage)) {
      this.target.currentHp -= damage;
      this.hit = false;
      this.change = null;
    }
    if(this.conditionTrigger) {
      this.conditionalRoll = true;
      this.conditionTrigger = false;
      this.advantage = null;
    }
    if(this.target.currentHp <= 0){
      this.target.condition.set("unconcious", true);
    }
  }

  healTarget(healing: number) {
    if (Number.isInteger(healing)) {
      this.target.currentHp -= (-healing);
      this.change = null;
    }
  }

  setCondition() {
    this.addCondition = true;
  }

  inflictCondition(key: string) {
    this.target.condition.set(key, true);
    this.addCondition = false;
  }

  endActions() {
    this.combatDataService.setEntity(this.currentEntity);
    this.combatDataService.setTarget(this.target);
    this.conditionalRoll = false;
    this.dialogRef.close();
  }

  grantsAdvantage() {
    if(this.target.condition.get("blinded") || this.currentEntity.condition.get("invisible") ||
      this.target.condition.get("paralyzed") || this.target.condition.get("petrified") ||
      this.target.condition.get("restrained") || this.target.condition.get("stunned") ||
      this.target.condition.get("unconcious")) {
        this.currentEntity.advantage = true;
      } else {
        this.currentEntity.advantage = false;
      }
  }

  grantsDisadvantage() {
    if(this.currentEntity.condition.get("blinded") || this.currentEntity.condition.get("poisoned") ||
      this.currentEntity.condition.get("prone")) {
        this.currentEntity.disadvantage = true;
    } else {
      this.currentEntity.disadvantage = false;
    }
  }
}
