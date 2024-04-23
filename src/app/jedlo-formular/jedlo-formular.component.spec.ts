import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedloFormularComponent } from './jedlo-formular.component';

describe('JedloFormularComponent', () => {
  let component: JedloFormularComponent;
  let fixture: ComponentFixture<JedloFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JedloFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JedloFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
