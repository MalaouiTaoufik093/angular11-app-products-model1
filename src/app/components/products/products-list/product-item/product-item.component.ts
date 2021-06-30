import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, productsActionsTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product :Product |null=null;
  @Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();


  constructor() { }

  ngOnInit(): void {
  }

  onselected(product: any) {
  this.eventEmitter.emit({type:productsActionsTypes.SELECT_PRODUCT,paylaod:product});
  }

  onDeleteProduct(product: Product) {
    this.eventEmitter.emit({type:productsActionsTypes.DELETE_PRODUCT,paylaod:product});
  }

  onUpdateProduct(product: Product) {
    this.eventEmitter.emit({type:productsActionsTypes.EDIT_PRODUCT,paylaod:product});
  }
}
