import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  searchKey:string = "";
  public filterCetagory : any;


  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.filterCetagory = res;
      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCetagory = this.productList
    .filter((a:any)=>{
      if(a.category === category || category === "")
      {
        return a;
      }
    })
  }

}
