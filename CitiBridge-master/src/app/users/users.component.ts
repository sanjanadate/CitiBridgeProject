import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit ,OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClientService } from '../http-client.service';
import { LoginComponent } from '../login/login.component';
import { MarketCapService } from './marketCap.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  template: ` id ` ,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnChanges {

@Input() id: number;
marketcaps!: HttpClientService[];
saved = " ";
userID:number;
formGroup:FormGroup;
msgTrue=false;
//stockQuantity:number;
public static quantity:number;

   
  constructor(
    private httpClientService:HttpClientService,
    private login :LoginComponent,
    private router:Router
  ) {   }

  ngOnChanges() {
    this.userID=this.id;
    
  }


    ngOnInit() {
      this.initForm();
      
    }

    initForm(){
      this.formGroup=new FormGroup({
        quantity: new FormControl('', Validators.required)
      })
    }
   

    
  random1(start:number,end: number)
  {
    this.httpClientService.getMarketCap(start,end).subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(resp:any)
{
    this.marketcaps=resp;
}

rabdom3()
{
  
  if(this.formGroup.valid)
  {
    UsersComponent.quantity=this.formGroup.value;
  }

}


saveStock(stock_Symbol:string,stockPrice:number,perc_ChangeIn_Price:number,stock_quantity:number)
{

  if(this.formGroup.valid)
  {
    UsersComponent.quantity=this.formGroup.value.quantity;
  }
   const saveStock = 
{
  "user_id": LoginComponent.user_id,
  "Symbol": stock_Symbol,
  "stockprice": stockPrice,
  "quantity": stock_quantity
}

  console.log(saveStock);
   if(stock_quantity > 0) {
    let resp = this.httpClientService.saveSelectedStock(saveStock);
    resp.subscribe(data => {
      console.log(data);
    
      alert(data);
    
    }
    );
   }
   else {
     alert('Please enter a valid quantity')
   }

console.log(LoginComponent.user_id);


}

random2(){
  this.router.navigate(["userstock"]);
}

back(){
  this.router.navigate(["login"]);
}

}
