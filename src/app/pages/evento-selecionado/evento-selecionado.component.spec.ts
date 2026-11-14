import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoSelecionadoComponent } from './evento-selecionado.component';

describe('EventoSelecionadoComponent', () => {
  let component: EventoSelecionadoComponent;
  let fixture: ComponentFixture<EventoSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoSelecionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
