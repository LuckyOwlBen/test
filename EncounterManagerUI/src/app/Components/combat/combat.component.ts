import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RollInitiativeService } from '../../Services/roll-initiative.service';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  entities: Entity[];

  constructor(
    private rollInitiativeService: RollInitiativeService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.entities = this.rollInitiativeService.getData();
  }

  entityTransfer(): void {
    this.rollInitiativeService.setData(this.entities);
    this.router.navigate(['/planning']);
  }

}
