import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProdcutEditComponent } from './admin/prodcut-edit/prodcut-edit.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NotfoundComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProdcutEditComponent,
    ProductDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
