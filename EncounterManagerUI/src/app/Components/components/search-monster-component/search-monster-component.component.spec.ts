import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMonsterComponentComponent } from './search-monster-component.component';

describe('SearchMonsterComponentComponent', () => {
  let component: SearchMonsterComponentComponent;
  let fixture: ComponentFixture<SearchMonsterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMonsterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMonsterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
