import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Screenshot } from './screenshot';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {

  constructor(private http: HttpClient) { }

  public getScreenshots(): Observable<Screenshot[]> {
    return this.http.get<Screenshot[]>("./assets/data/screenshots.json");
  }
}
