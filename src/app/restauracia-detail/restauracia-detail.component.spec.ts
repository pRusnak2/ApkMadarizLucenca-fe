import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauraciaDetailComponent } from './restauracia-detail.component';

describe('RestauraciaDetailComponent', () => {
  let component: RestauraciaDetailComponent;
  let fixture: ComponentFixture<RestauraciaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauraciaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestauraciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
