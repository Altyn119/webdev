
import { Component, Input } from '@angular/core';
import { products2 } from 'C:/Games/WebDev/Lab 5/Lab 5/src/app/products2';


@Component({
  selector: 'app-product-page2',
  templateUrl: './product-page2.component.html',
  styleUrls: ['./product-page2.component.css']
})
export class ProductPage2Component {
  products=[...products2]
  public share(link:string){
    window.location.href = link;
  }
  likeButtonClick(index:number) {
    this.products[index].numberOfLikes++;
  }
  deleteButton(index:number){
    this.products.splice(index,1)
  }
}
