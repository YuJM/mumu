import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaButtonComponent } from './pa-button.component';

describe('PaButtonComponent', () => {
  let component: PaButtonComponent;
  let fixture: ComponentFixture<PaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
