import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productid?: number;
  productformgroup?: FormGroup;
  public submitted: boolean;


  constructor(private activatedrout: ActivatedRoute
    , private produitservice: ProductsService
    , private fb: FormBuilder) {
    this.productid = activatedrout.snapshot.params.id;
  }

  ngOnInit(): void {
    this.produitservice.getproduct(this.productid)
      .subscribe(product => {
        this.productformgroup =
          this.fb.group({
            id: [product.id, Validators.required],
            name: [product.name, Validators.required],
            price: [product.price, Validators.required],
            quantity: [product.quantity, Validators.required],
            selected: [product.selected, Validators.required],
            available: [product.available, Validators.required],
          });
      });
  }

  onUpdateProduct() {
    this.submitted=true;
    if(this.productformgroup?.invalid) return;
    this.produitservice.update(this.productformgroup.value)
      .subscribe(data => {
        alert('modification bien fait');
      });
  }
}
