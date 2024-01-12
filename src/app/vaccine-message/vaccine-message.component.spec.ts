import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineMessageComponent } from './vaccine-message.component';

describe('VaccineMessageComponent', () => {
  let component: VaccineMessageComponent;
  let fixture: ComponentFixture<VaccineMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
