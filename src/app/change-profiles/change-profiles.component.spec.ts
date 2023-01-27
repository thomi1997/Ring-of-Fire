import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfilesComponent } from './change-profiles.component';

describe('ChangeProfilesComponent', () => {
  let component: ChangeProfilesComponent;
  let fixture: ComponentFixture<ChangeProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
