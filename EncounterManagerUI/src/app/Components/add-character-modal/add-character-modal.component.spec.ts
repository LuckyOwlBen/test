import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterModalComponent } from './add-character-modal.component';

describe('AddCharacterModalComponent', () => {
  let component: AddCharacterModalComponent;
  let fixture: ComponentFixture<AddCharacterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharacterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
