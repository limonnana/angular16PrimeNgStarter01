import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnidadesComponent } from './all-unidades.component';

describe('AllUnidadesComponent', () => {
  let component: AllUnidadesComponent;
  let fixture: ComponentFixture<AllUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUnidadesComponent]
    });
    fixture = TestBed.createComponent(AllUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
