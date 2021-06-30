import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, productsActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 @Input() productsInput$:Observable<AppDataState<Product[]>> |null=null;
 @Output() productsEventEmmiter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  readonly DataStateEnum = DataStateEnum;


  constructor() { }

  ngOnInit(): void {
  }

  onselected(p: Product) {
   this.productsEventEmmiter.emit({type:productsActionsTypes.SELECT_PRODUCT,paylaod:p})
  }

  onDeleteProduct(p: Product) {
    this.productsEventEmmiter.emit({type:productsActionsTypes.DELETE_PRODUCT,paylaod:p})
  }

  onUpdateProduct(p: Product) {
    this.productsEventEmmiter.emit({type:productsActionsTypes.EDIT_PRODUCT,paylaod:p})

  }

  onActionEvent($event: ActionEvent) {
   this.productsEventEmmiter.emit($event);
  }
}
