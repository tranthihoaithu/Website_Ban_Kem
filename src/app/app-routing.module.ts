import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProdcutEditComponent } from './admin/prodcut-edit/prodcut-edit.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'chi-tiet/:id',
    component:ProductDetailComponent
  },

  {
    path:'product',
    component:ProductComponent
  },
  /*{
    path:'**',component:NotfoundComponent
  },*/
  
  {
    path:'product-list', component:ProductListComponent
  },
  {
    path:'product-create', component:ProductCreateComponent
  },
  {
    path:'product-edit/:id', component:ProdcutEditComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register',component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
