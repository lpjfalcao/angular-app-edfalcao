import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisObrasComponent } from './principais-obras.component';

describe('PrincipaisObrasComponent', () => {
  let component: PrincipaisObrasComponent;
  let fixture: ComponentFixture<PrincipaisObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipaisObrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipaisObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
