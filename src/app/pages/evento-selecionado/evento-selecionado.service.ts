import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EventoSelecionadoRootViewModel {
  evento: EventoContainerViewModel;
}

export interface EventoContainerViewModel {
  Id: number;
  Evento: EventoMapViewModel;
}

export interface EventoMapViewModel {
  Description: string;
  ImageUrl: string;
  Title: string;
  Cidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoSelecionadoService {

  constructor(private httpClient: HttpClient) { }

  obterEventoPorId(url: string): Observable<EventoSelecionadoRootViewModel> {
    return this.httpClient.get<EventoSelecionadoRootViewModel>(url)
  }
}
