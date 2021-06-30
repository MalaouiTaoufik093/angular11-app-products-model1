import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, productsActionsTypes} from "../../../state/product.state";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
 @Output() producteventemitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.producteventemitter.emit({type:productsActionsTypes.GET_ALL_PRODUCTS,paylaod:null});

  }

  onGetSelectedProduct() {
    this.producteventemitter.emit({type:productsActionsTypes.GET_SELECTED_PRODUCTS});

  }

  onGetAvailableProduct() {
    this.producteventemitter.emit({type:productsActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.producteventemitter.emit({type:productsActionsTypes.NEW_PRODUCTS});

  }

  onSearch(dataFomr: any) {
    this.producteventemitter.emit({type:productsActionsTypes.SEARCH_PRODUCTS,paylaod:dataFomr});

  }
}
