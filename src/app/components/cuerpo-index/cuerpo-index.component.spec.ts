import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoIndexComponent } from './cuerpo-index.component';

describe('CuerpoIndexComponent', () => {
  let component: CuerpoIndexComponent;
  let fixture: ComponentFixture<CuerpoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
