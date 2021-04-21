import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  medicine: string;
  year: number;
  month: number;
  months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  isPredicted = false;
  quantity = 0;
  orderForm = this.formBuilder.group({
    quantity: new FormControl(),
    note: new FormControl(),
  });
  orderSubscription: Subscription;


  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  // when component mounting, path parameters are obtained
  ngOnInit() {
    const details = this.route.snapshot.paramMap.get('details');
    this.medicine = details.split('_')[0];
    this.year = parseInt(details.split('_')[1]);
    this.month = parseInt(details.split('_')[2]);
    this.quantity = parseFloat(details.split('_')[3]);
    this.isPredicted = details.split('_')[4] === 'true' ? true : false;

    this.orderForm.setValue({quantity : this.quantity, note: ''});
    if(this.quantity > 0) {
      this.orderForm.controls.quantity.disable();
    }
  }

  // creates order request and process responses
  purchaseOrder(){
    const order: Order = {
      orderId: 0,
      medicine: this.medicine == 'adorastatin' ? '0' : 
        this.medicine == 'metformin' ? '1' :
        this.medicine == 'losatank' ? '2' :
        this.medicine == 'aspirin' ? '3' : '4',
      year: this.year,
      month: this.month,
      quantity: this.quantity > 0 ? this.quantity : this.orderForm.value.quantity,
      isPredicted: this.isPredicted,
      note: this.orderForm.value.note,
    };
    this.orderSubscription =  this.orderService.createOrder( order ).subscribe( 
      data => {
        Swal.fire({
          icon: 'success',
          text: 'Purchasing Success'
        });
        this.router.navigate(['/order']);
      },
      error => {
        alert(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    if(this.orderSubscription){
      this.orderSubscription.unsubscribe();
    }
    
  }

}
