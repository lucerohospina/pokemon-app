import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  api_url = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation";
  constructor(private http: HttpClient) {}

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.api_url}${url}`, {
      headers: this.headers,
      params,
    });
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.http.post<T>(
      `${this.api_url}${url}`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(
      `${this.api_url}${url}`,
      JSON.stringify(data),
      {
        headers: this.headers,
      }
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.api_url}${url}`, {
      headers: this.headers,
    });
  }

  getFile(url: string, params: HttpParams): Observable<Blob> {
    const options: Object = {
      headers: this.headers,
      observe: 'body',
      params: params,
      reportProgress: false,
      responseType: 'blob',
      withCredentials: false,
    };
    return this.http.get<Blob>(`${this.api_url}${url}`, options);
  }

  postFile(url: string, body: any, params: HttpParams): Observable<Blob> {
    const options: Object = {
      headers: this.headers,
      observe: 'body',
      params: params,
      reportProgress: false,
      responseType: 'blob',
      withCredentials: false,
    };
    return this.http.post<Blob>(`${this.api_url}${url}`, body, options);
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
