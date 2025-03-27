import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCalculatorComponent } from './recette-calculator.component';

describe('RecetteCalculatorComponent', () => {
  let component: RecetteCalculatorComponent;
  let fixture: ComponentFixture<RecetteCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetteCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
