import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

declare var $: any;
declare var jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  modalActions = new EventEmitter<string | MaterializeAction>();
  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
  private
  mostrarBarra(){
   jQuery(this).find('.button-collapse').sideNav();
  }
}
