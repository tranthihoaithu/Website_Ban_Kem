import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Banner } from 'src/app/models/banner';
import { Product } from 'src/app/models/product';
import { AppService } from 'src/app/services/app.service';
import { BannerService } from 'src/app/services/banner.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  banners: Array<Banner> = new Array<Banner>();
  products: Array<Product> = [];

  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 800,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  bannerOptions: OwlOptions = {
    loop: true,
    items:1,
    dots: true,
    navSpeed: 800,
    nav: true,
    navText: ['Previous', 'Next'],
   
  }
  
  constructor(private bn:BannerService , private pro: ProductService, private app:AppService){  }

  ngOnInit():void {
    // this.bn.getBanners().subscribe(data =>{
    //   this.banners = data;
    // });

    // this.pro.getProducts().subscribe(data =>{
    //   this.products = data;
    // })
    this.app.listCategories().subscribe(res =>{
      console.log(res);
    })
  }

}
