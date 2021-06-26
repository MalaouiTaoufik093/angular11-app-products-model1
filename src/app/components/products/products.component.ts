import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/product.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>> |null=null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productservice:ProductsService,private router:Router) { }

  ngOnInit(): void {

  }

  onGetAllProduct() {
    console.log("start...");
    this.products$=this.productservice.getAllProducts()
      .pipe(
        map(data=>{
          console.log(data);
          return ({datastate:DataStateEnum.LOADED,data:data})
        }),
        startWith({datastate:DataStateEnum.LOADING}),
        catchError( err => of({datastate:DataStateEnum.ERROR,errorMessage:err.message}))
        );
  }
  //   this.productservice.getAllProducts()
  //     .subscribe(data=>{
  //       this.products=data;
  //     },error => {
  //       console.log(error);
  //     })
  // }
  onGetSelectedProduct() {
    this.products$=this.productservice.getSelectedProducts()
      .pipe(
        map(data=>{
          console.log(data);
          return ({datastate:DataStateEnum.LOADED,data:data})
        }),
        startWith({datastate:DataStateEnum.LOADING}),
        catchError( err => of({datastate:DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }

  onGetAvailableProduct() {
    this.products$=this.productservice.getAvailableProducts()
      .pipe(
        map(data=>{
          console.log(data);
          return ({datastate:DataStateEnum.LOADED,data:data})
        }),
        startWith({datastate:DataStateEnum.LOADING}),
        catchError( err => of({datastate:DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }

  onSearch(dataForm: any) {
    this.products$=this.productservice.SearchProducts(dataForm.keyword)
      .pipe(
        map(data=>{
          console.log(data);
          return ({datastate:DataStateEnum.LOADED,data:data})
        }),
        startWith({datastate:DataStateEnum.LOADING}),
        catchError( err => of({datastate:DataStateEnum.ERROR,errorMessage:err.message}))
      );
  }

  onselected(p: Product) {
    this.productservice.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })
  }

  onDeleteProduct(p: Product) {
    let v=confirm("Etes Vous sure ?");
    if(v=true)
    this.productservice.delete(p)
      .subscribe(data=>{
        this.onGetAllProduct();
      })
  }

  onNewProduct() {
  this.router.navigateByUrl("/new")
  }

  onUpdateProduct(p) {
    this.router.navigateByUrl("/update/"+p.id)
  }
}
