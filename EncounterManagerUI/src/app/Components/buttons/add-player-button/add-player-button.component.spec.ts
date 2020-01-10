import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerButtonComponent } from './add-player-button.component';

describe('AddPlayerButtonComponent', () => {
  let component: AddPlayerButtonComponent;
  let fixture: ComponentFixture<AddPlayerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
