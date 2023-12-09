import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product: Product = new Product; // nhận tất cả các kiểu dữ liệu
  cartForm: FormGroup = new FormGroup({

  })

   constructor(private _route: ActivatedRoute, private Pro: ProductService){

   }
  ngOnInit(): void{
    this.id = this._route.snapshot.params['id']; // lấy id xuống
    this.Pro.getOne(this.id).subscribe(data =>{
      console.log(data);
      this.product = data;
    })
   
   }
  onUpdate() {
      
  }
}
