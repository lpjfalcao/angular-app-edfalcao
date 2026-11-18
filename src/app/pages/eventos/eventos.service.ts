import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventoViewModel } from '../home/home.component';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface EventoRootViewModel {
  eventos: EventoContainerViewModel[];
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

export interface FotoEventoRootViewModel {
  fotos: FotoEventoContainerViewModel[];
}

export interface FotoEventoContainerViewModel {
  EventoId: number;
  FotoId: string;
  ImageUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  constructor(private httpClient: HttpClient) { }

  obterEventos(url: string): Observable<EventoRootViewModel> {
    return this.httpClient.get<EventoRootViewModel>(url);
  }  

  obterFotosPorEvento(url: string): Observable<FotoEventoRootViewModel> {
    return this.httpClient.get<FotoEventoRootViewModel>(url);
  }
}
