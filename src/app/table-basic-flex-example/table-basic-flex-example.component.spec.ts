import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicFlexExampleComponent } from './table-basic-flex-example.component';

describe('TableBasicFlexExampleComponent', () => {
  let component: TableBasicFlexExampleComponent;
  let fixture: ComponentFixture<TableBasicFlexExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBasicFlexExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicFlexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
