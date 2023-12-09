import { Component } from '@angular/core';
import {FormControl,FormGroup}   from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private pro: ProductService, private route: Router){ }

  productFormCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    image1: new FormControl(),
    image2: new FormControl(),
    image3: new FormControl(),
    image4: new FormControl(),
    hsd:    new FormControl(),
    made:   new FormControl(),
    type: new FormControl(),
    amount: new FormControl(),


  });

  ngOnInit(): void{

  }
  onCreate() {
    this.pro.create(this.productFormCreate.value).subscribe(data =>{
      this.route.navigate(['/product-list']);
    })
    
  }

}
