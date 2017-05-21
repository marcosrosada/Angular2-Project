import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleComponent } from './life-cicle.component';

describe('LifeCicleComponent', () => {
  let component: LifeCicleComponent;
  let fixture: ComponentFixture<LifeCicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
