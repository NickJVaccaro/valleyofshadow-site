import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Credit } from "./credit";

@Injectable({
    providedIn: 'root'
})
export class CreditService {
    constructor(private http: HttpClient) { }
    public getCredits(): Observable<Credit[]> {
        return this.http.get<Credit[]>("./assets/data/asset-credits.json");
    }
}