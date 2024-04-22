import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjednavkyComponent } from './objednavky.component';

describe('ObjednavkyComponent', () => {
  let component: ObjednavkyComponent;
  let fixture: ComponentFixture<ObjednavkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjednavkyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjednavkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
