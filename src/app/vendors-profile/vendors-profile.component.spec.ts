import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsProfileComponent } from './vendors-profile.component';

describe('VendorsProfileComponent', () => {
  let component: VendorsProfileComponent;
  let fixture: ComponentFixture<VendorsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
