import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvodComponent } from './uvod.component';

describe('UvodComponent', () => {
  let component: UvodComponent;
  let fixture: ComponentFixture<UvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
