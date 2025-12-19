import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCarouselComponent } from './mobile-carousel.component';

describe('MobileCarouselComponent', () => {
  let component: MobileCarouselComponent;
  let fixture: ComponentFixture<MobileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
