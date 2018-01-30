import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonDetailComponent } from './persoon-detail.component';

describe('PersoonDetailComponent', () => {
  let component: PersoonDetailComponent;
  let fixture: ComponentFixture<PersoonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
