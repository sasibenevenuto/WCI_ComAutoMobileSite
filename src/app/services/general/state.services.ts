import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StateModel } from "src/app/model/general/stateModel";
import { environment } from "src/environments/environment";

@Injectable()
export class StateService {

    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<StateModel[]> {
        return this.http.get<StateModel[]>(`${this.url}/api/States/`);
    }

}