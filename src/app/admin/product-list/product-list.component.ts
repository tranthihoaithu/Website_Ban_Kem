import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<Product>= [];
 searchForm: FormGroup = new FormGroup({
    name: new FormControl()
    

  });
  constructor(private pro: ProductService){

  }
  ngOnInit(): void {
    this.pro.getProducts().subscribe(data =>{
      this.products = data
    })
  }
  onDelete(id:number) {
    this.pro.delete(id).subscribe(data => {
      this.pro.getProducts().subscribe(data =>{
        this.products = data
      })
     });
  }

  onEdit(pro:any){

  }
  onSearch(){
    this.pro.getProducts(10,this.searchForm.value.name).subscribe(data =>{
      this.products = data
    })
  }
}
