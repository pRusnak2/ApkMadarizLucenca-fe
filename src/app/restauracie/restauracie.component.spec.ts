import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracieComponent } from './restauracie.component';

describe('RestauracieComponent', () => {
  let component: RestauracieComponent;
  let fixture: ComponentFixture<RestauracieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauracieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestauracieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
