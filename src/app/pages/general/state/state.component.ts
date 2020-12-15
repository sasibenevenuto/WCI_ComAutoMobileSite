import { Component, OnInit } from '@angular/core';
import { StateModel } from 'src/app/model/general/stateModel';
import { StateService } from 'src/app/services/general/state.services';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states: StateModel[] = [];

  first = 0;

  rows = 10;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.getAll().subscribe(result => {
      this.states = result;
    })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.states ? this.first === (this.states.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.states ? this.first === 0 : true;
  }

}
