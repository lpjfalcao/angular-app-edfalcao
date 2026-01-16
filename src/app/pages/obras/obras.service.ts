import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObrasResponse } from '../../interfaces/responses/obras.response';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  constructor(private apiClient: HttpClient) { }

  getObras(url: string): Observable<ObrasResponse> {
    return this.apiClient.get<ObrasResponse>(url);
  }
}
