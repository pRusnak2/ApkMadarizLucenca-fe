import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraciaComponent } from './registracia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';



describe('RegistraciaComponent', () => {
  let component: RegistraciaComponent;
  let fixture: ComponentFixture<RegistraciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistraciaComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
