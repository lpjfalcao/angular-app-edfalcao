import { TestBed } from '@angular/core/testing';

import { EventoSelecionadoService } from './evento-selecionado.service';

describe('EventoSelecionadoService', () => {
  let service: EventoSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
