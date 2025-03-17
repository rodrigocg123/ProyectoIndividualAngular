import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioproductosComponent } from './formularioproductos.component';

describe('FormularioproductosComponent', () => {
  let component: FormularioproductosComponent;
  let fixture: ComponentFixture<FormularioproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
