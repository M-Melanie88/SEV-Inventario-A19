import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandsComponent } from './loands.component';

describe('LoandsComponent', () => {
  let component: LoandsComponent;
  let fixture: ComponentFixture<LoandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
