import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { apiUrl } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  filterParams : Subject<any> = new Subject();
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/ld+json' })
  };

  constructor(
    private http: HttpClient) { }

    /** GET servers list from the backend */
    getServerList(param = {}): Observable<any> {
      let paramFormated = new HttpParams({fromObject:param});
      return this.http.get(`${apiUrl}/api/servers?${paramFormated.toString()}`);
    }

    /** GET filters list from the backend */
    getFiltersList(): Observable<any> {
      return this.http.get(`${apiUrl}/api/filters`);
    }
}
