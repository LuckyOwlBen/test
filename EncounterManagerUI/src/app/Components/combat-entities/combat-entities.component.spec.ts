import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatEntitiesComponent } from './combat-entities.component';

describe('CombatEntitiesComponent', () => {
  let component: CombatEntitiesComponent;
  let fixture: ComponentFixture<CombatEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
