import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathSavingThrowModalComponent } from './death-saving-throw-modal.component';

describe('DeathSavingThrowModalComponent', () => {
  let component: DeathSavingThrowModalComponent;
  let fixture: ComponentFixture<DeathSavingThrowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathSavingThrowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathSavingThrowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
