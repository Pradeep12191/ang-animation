import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { basicState, groupState, initialState, moveState, queryState, fadeIn, panelExpand } from '../animations/animatiom';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
  animations: [
    basicState,
    moveState,
    initialState,
    groupState,
    queryState,
    panelExpand,
    fadeIn
  ]
})
export class ContactEditComponent implements OnInit {
  basicState = 'blue';
  moveState = 'start';
  expandState = 'shrink';
  foldState = 'expand';
  show = false;
  panelExpandState = 'expanded';
  employee;
  constructor() { }

  ngOnInit(): void {
  }
  change() {
    this.basicState = this.basicState === 'red' ? 'blue' : 'red';
    this.moveState = this.moveState === 'start' ? 'right' : 'start';
    this.expandState = this.expandState === 'shrink' ? 'expand' : 'shrink';

    // safe navigation
    // if (this.employee?.job?.title) {

    // }

    // outerLoop:
    // for (let i = 0; i < 5; i++) {
    //   innerLoop:
    //   for (let k = 0; k < 5; k++) {
    //     break outerLoop;
    //   }
    // }

  }

  fold() {
    this.foldState = this.foldState === 'shrink' ? 'expand' : 'shrink';
  }

  expand() {
    this.panelExpandState = this.panelExpandState === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
