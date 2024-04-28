import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastoKladeneOtazkyComponent } from './casto-kladene-otazky.component';

describe('CastoKladeneOtazkyComponent', () => {
  let component: CastoKladeneOtazkyComponent;
  let fixture: ComponentFixture<CastoKladeneOtazkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastoKladeneOtazkyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastoKladeneOtazkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
