import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDropdownComponent } from './charts-dropdown.component';

describe('ChartsDropdownComponent', () => {
  let component: ChartsDropdownComponent;
  let fixture: ComponentFixture<ChartsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
