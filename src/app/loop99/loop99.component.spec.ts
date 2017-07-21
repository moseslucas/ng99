import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loop99Component } from './loop99.component';

describe('Loop99Component', () => {
  let component: Loop99Component;
  let fixture: ComponentFixture<Loop99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loop99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loop99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
