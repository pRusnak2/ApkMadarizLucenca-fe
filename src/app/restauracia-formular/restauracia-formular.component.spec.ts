import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauraciaFormularComponent } from './restauracia-formular.component';

describe('RestauraciaFormularComponent', () => {
  let component: RestauraciaFormularComponent;
  let fixture: ComponentFixture<RestauraciaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauraciaFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestauraciaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
