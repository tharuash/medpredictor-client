import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  orders: Order[];
  orderColumnOne: Order[];
  orderColumnTwo: Order[];
  ordersSubscription: Subscription;
  months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  searchForm = this.formBuilder.group({
    medicine: 'adorastatin'
  });

  constructor(private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ordersSubscription = this.orderService.getOrderHistory().subscribe(
      data => {
        this.orders = data;
        this.divideToOrderColumns(this.orders);
      },
      error => {
        console.log(error);
      }
    );
  }

  divideToOrderColumns(orders: Order[]){
    this.orderColumnOne = [];
    this.orderColumnTwo = [];

    let appenedColumn = 1;
    orders.forEach( order => {
      if (appenedColumn == 1){
        this.orderColumnTwo.push(order);
        appenedColumn = 2;
      } else {
        this.orderColumnOne.push(order);
        appenedColumn = 1;
      }

    });
  }

  search(){
    const orders = this.orders;
    this.orderColumnOne = [];
    this.orderColumnTwo = [];
    let appenedColumn = 1;
    orders.forEach( order => {
      if( order.medicine == this.searchForm.value.medicine.toUpperCase()){
        if (appenedColumn == 1) {
          this.orderColumnTwo.push(order);
          appenedColumn = 2;
        } else {
          this.orderColumnOne.push(order);
          appenedColumn = 1;
        }
      }
    });
  }

  ngOnDestroy(): void {
   if(this.ordersSubscription){
     this.ordersSubscription.unsubscribe();
   }
    
  }

}
