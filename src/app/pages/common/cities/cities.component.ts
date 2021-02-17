import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/model/common/cityModel';
import { CityService } from 'src/app/services/common/city.services';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: CityModel[] = [];
  count = 10;
  first = 0;
  rows = 10;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getAll().subscribe(result => {
      this.cities = result.data;
      this.count = result.count;
    })
  }
  
  loadCarsLazy(event:any){
    console.log(event);
  }

}
