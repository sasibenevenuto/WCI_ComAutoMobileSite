import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CityModel } from "src/app/model/common/cityModel";
import { BaseRetornoApiModel } from "src/app/model/general/baseRetornoApiModel";
import { environment } from "src/environments/environment";

@Injectable()
export class CityService{
    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<BaseRetornoApiModel> {
        return this.http.get<BaseRetornoApiModel>(`${this.url}/api/Cities/null/null/null/null`);
    }
}