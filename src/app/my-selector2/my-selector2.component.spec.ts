import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelector2Component } from './my-selector2.component';

describe('MySelector2Component', () => {
  let component: MySelector2Component;
  let fixture: ComponentFixture<MySelector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
