import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutEditComponent } from './prodcut-edit.component';

describe('ProdcutEditComponent', () => {
  let component: ProdcutEditComponent;
  let fixture: ComponentFixture<ProdcutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
