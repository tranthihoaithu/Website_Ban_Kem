import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { Category } from './models/category';
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icecream';
  products: Array<Product>= [];
  category: Array<Category> = new Array<Category>();
  searchForm: FormGroup = new FormGroup({
     name: new FormControl()
     
   });
   constructor(private pro: ProductService, private cate: CategoryService, private app:AppService){

   }
   onSearch(){
    this.pro.getProducts(10,this.searchForm.value.name).subscribe(data =>{
      this.products = data
    })
  }
  ngOnInit():void {
    // this.cate.getCategory().subscribe(data =>{
    //   this.category= data;
    // });
    this.app.listCategories().subscribe(res =>{
      console.log(res);
      
    })

    
  }
  
}
