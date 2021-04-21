import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seewhy',
  templateUrl: './seewhy.component.html',
  styleUrls: ['./seewhy.component.css']
})
export class SeewhyComponent implements OnInit {

  medicine: string;
  type: string;
  quantity: number;
  year: number;
  month: number;
  typeACurrentGraph: string;
  orderSubscription: Subscription;
  reasons: string;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  // when component is mounting, the path params are obtained
  ngOnInit() {
    const medicineWithType = this.route.snapshot.paramMap.get('medicine');
    this.medicine = medicineWithType.split('_')[0];
    this.type = medicineWithType.split('_')[1];
    this.quantity = parseFloat(medicineWithType.split('_')[2]);
    this.year = parseInt(medicineWithType.split('_')[3]);
    this.month = parseInt(medicineWithType.split('_')[4]);

    switch ( this.type ) {
      case 'a' :
          this.typeACurrentGraph = '/assets/img/rates/' + this.medicine + '.png';
          break;

      case 'b':
          if(this.medicine == 'adorastatin'){
            this.reasons = 'There\'s no effect for Adorastatin from COVID 19';
          } else if (this.medicine == 'metformin'){
            this.reasons = 'There\'s no effect for Metformin from COVID 19';
          } else if (this.medicine == 'losatank'){
            this.reasons = 'There\'s no effect for Losatan Potacium from COVID 19';
          } else if (this.medicine == 'aspirin'){
            this.reasons = 'There\'s a effect of nealy 40% increase of buying Asprine in ' +
            '2020 because of COVID 19. So the normal prediction value has increased from 40%.';
          } else {
            this.reasons = 'There\'s no effect for Losatan Potacium from COVID 19';
          }

          break;

      case 'c':
        break;
    }
  }

  purchaseOrder(){
    const order: Order = {
      orderId: 0,
      medicine: this.medicine == 'adorastatin' ? '0' : 
        this.medicine == 'metformin' ? '1' :
        this.medicine == 'losatank' ? '2' :
        this.medicine == 'aspirin' ? '3' : '4',
      year: this.year,
      month: this.month,
      quantity: this.quantity,
      isPredicted: true,
      note: '',
    };
    this.orderSubscription =  this.orderService.createOrder( order ).subscribe( 
      data => {
        this.router.navigate(['/order']);
      },
      error => {
        alert(error.message);
      }
    );
  }

  // navigate to purchase component with custom quatity
  orderCustomQuantity(){
    this.router.navigate(['/purchase', this.medicine + '_' + this.year + '_' + this.month + '_' + '0' + '_' + false]);
  }

  // navigate to purchase component with predicted quatity
  orderPredictedQuantity(){
    this.router.navigate(['/purchase', this.medicine + '_' + this.year + '_' + this.month + '_' + this.quantity + '_' + true]);
  }


}
