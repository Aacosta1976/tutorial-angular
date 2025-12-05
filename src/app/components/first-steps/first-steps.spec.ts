import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSteps } from './first-steps';

describe('FirstSteps', () => {
  let component: FirstSteps;
  let fixture: ComponentFixture<FirstSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSteps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
