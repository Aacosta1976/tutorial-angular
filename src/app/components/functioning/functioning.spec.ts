import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Functioning } from './functioning';

describe('Functioning', () => {
  let component: Functioning;
  let fixture: ComponentFixture<Functioning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Functioning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Functioning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
