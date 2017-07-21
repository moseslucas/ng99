import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello99Component } from './hello99.component';

describe('Hello99Component', () => {
  let component: Hello99Component;
  let fixture: ComponentFixture<Hello99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hello99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
