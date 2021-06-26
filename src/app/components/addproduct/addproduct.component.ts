import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productFormGroupe?:FormGroup ;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private productservice:ProductsService) { }

  ngOnInit(): void {
     this.productFormGroupe=this.fb.group({
       name:["",Validators.required],
       price:[0,Validators.required],
       quantity:[0,Validators.required],
       selected:[true,Validators.required],
       available:[true,Validators.required]
     });
  }

  onSaveProduct() {
    this.submitted=true;
    if(this.productFormGroupe?.invalid) return;
    this.productservice.save(this.productFormGroupe?.value)
      .subscribe(data=>{
        alert("insertion bien fait");
      })

  }
}
