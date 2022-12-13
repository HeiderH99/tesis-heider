import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private URL: string = 'https://3.230.135.169:443/upload';

  constructor(private http: HttpClient) { }

  detectCancer(file: any): Observable<any> {
    let serviceUrl = `${this.URL}/upload`;
    return this.http.post(serviceUrl, file);
  }
}
