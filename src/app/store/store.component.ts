import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  products:any=[
    { productName:'pen', price:1200000,rating: 4,freeDelivery:'true' },
    { productName:'phone',price: 1300000,rating: 5,freeDelivery:'false' },
    { productName:'shirt',price: 1600000, rating: 10,freeDelivery:'true' },
    { productName:'cap', price: 1200000,rating: 7,freeDelivery:'false' },
    { productName:'mobile case',price: 600000, rating: 2,freeDelivery:'true' },
    { productName:'remote', price: 1400000,rating: 6,freeDelivery:'false' },
    { productName:'laptop',price: 1600000, rating: 8,freeDelivery:'true' },
    { productName:'washing machine',price: 700000,rating: 3,freeDelivery: 'false' },
    { productName:'fan',price: 400000, rating: 2, freeDelivery:'true' },
    { productName:'shirt',price: 300000, rating: 1,freeDelivery:'false' },
    { productName:'pen',price: 350000, rating: 3.5,freeDelivery:'true' },
  ];

name:string="";
price:number=0;
rating:number=0;
free:boolean=true;

creat(){
  let product={
    productName:this.name,
    price:this.price,
    rating:this.rating,
    freeDelivery:this.free

  }
  this.products.unshift(product);
}
delete(i:number){
  this.products.splice(i,1);
}

term:string="";

search(){
  this.products=this.products.filter((product:any)=>product.productName.includes(this.term))
}

// pricehl(){
//   this.products.sort((a:any,b:any)=>b.price-a.price)
// }
pricehl(){
  this.products.sort((a:any,b:any)=>b.price-a.price)
}

pricelh(){
  this.products.sort((a:any,b:any)=>a.price-b.price)
}

ratinghl(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating)
}

ratinglh(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating)
}


discount(){
  this.products=this.products.map((product:any)=>{
    product.price=product
    .price-0.5;
    return product
  })
}


}
