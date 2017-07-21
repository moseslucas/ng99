import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditional99Component } from './conditional99.component';

describe('Conditional99Component', () => {
  let component: Conditional99Component;
  let fixture: ComponentFixture<Conditional99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conditional99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conditional99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
