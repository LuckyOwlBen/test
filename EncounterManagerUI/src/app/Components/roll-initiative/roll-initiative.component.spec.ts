import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollInitiativeComponent } from './roll-initiative.component';

describe('RollInitiativeComponent', () => {
  let component: RollInitiativeComponent;
  let fixture: ComponentFixture<RollInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
