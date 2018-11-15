import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pillar } from './pillar';

@Injectable({
  providedIn: 'root'
})
export class PillarService {

  constructor(private http: HttpClient) { }

  public getPillars(): Observable<Pillar[]> {
    return this.http.get<Pillar[]>("./assets/data/gamepillars.json");
  }
}