import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjednavkyRestauraciaComponent } from './objednavky-restauracia.component';

describe('ObjednavkyRestauraciaComponent', () => {
  let component: ObjednavkyRestauraciaComponent;
  let fixture: ComponentFixture<ObjednavkyRestauraciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjednavkyRestauraciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjednavkyRestauraciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
