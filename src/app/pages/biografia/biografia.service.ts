import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BiografiaResponse } from '../../interfaces/responses/biografia.response';

@Injectable({
  providedIn: 'root'
})
export class BiografiaService {

  constructor(private httpClient: HttpClient) { }

  getBiografias(url: string): Observable<BiografiaResponse> {
    return this.httpClient.get<BiografiaResponse>(url);
  }
}
