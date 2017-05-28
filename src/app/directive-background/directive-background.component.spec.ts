import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBackgroundComponent } from './directive-background.component';

describe('DirectiveBackgroundComponent', () => {
  let component: DirectiveBackgroundComponent;
  let fixture: ComponentFixture<DirectiveBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
