import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAuthLayoutComponent } from './shared-auth-layout.component';

describe('SharedAuthLayoutComponent', () => {
  let component: SharedAuthLayoutComponent;
  let fixture: ComponentFixture<SharedAuthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedAuthLayoutComponent]
    });
    fixture = TestBed.createComponent(SharedAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
