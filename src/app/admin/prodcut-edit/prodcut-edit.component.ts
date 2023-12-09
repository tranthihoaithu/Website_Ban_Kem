import { Component } from '@angular/core';
import {FormControl,FormGroup}   from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prodcut-edit',
  templateUrl: './prodcut-edit.component.html',
  styleUrls: ['./prodcut-edit.component.css']
})
export class ProdcutEditComponent {

  id: number = 0;
  constructor(private pro: ProductService, private _route: ActivatedRoute){ }
  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    image: new FormControl()

  });

  ngOnInit(): void{
    this.id = this._route.snapshot.params['id'];
   this.pro.getOne(this.id).subscribe(data=> {
    this.productFormEdit = new FormGroup({
      name: new FormControl(data.name),
      price: new FormControl(data.price),
      image: new FormControl(data.image)
   });
    
  });
}
  onUpdate() {
      this.pro.update(this.id,this.productFormEdit.value).subscribe(data =>{
        console.log(data);
      });
  }
}
