import { StateModel } from "./stateModel";

export class CityModel{
    cityId:number;
    name:string;
    externalCode: string;
    state: StateModel;
}