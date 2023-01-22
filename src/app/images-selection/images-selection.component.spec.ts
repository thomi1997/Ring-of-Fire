import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSelectionComponent } from './images-selection.component';

describe('ImagesSelectionComponent', () => {
  let component: ImagesSelectionComponent;
  let fixture: ComponentFixture<ImagesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
