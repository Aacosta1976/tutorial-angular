import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conclusions } from './conclusions';

describe('Conclusions', () => {
  let component: Conclusions;
  let fixture: ComponentFixture<Conclusions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conclusions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conclusions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
