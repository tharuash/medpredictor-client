import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { PredictionRequest } from 'src/app/models/prediction.request';
import { Router } from '@angular/router';
import { PredictionService } from 'src/app/services/prediction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  predictSubscriber: Subscription;
  predictedValue: number;
  predictForm = this.formBuilder.group({
    medicine: 'adorastatin',
    year: 2021,
    month: 1,
    option: ['a'],
  });
  predictionSubscription: Subscription;
  selectedMedicine;
  selectedOption;

  constructor(private formBuilder: FormBuilder, private predictionService: PredictionService, private router: Router) { }

  ngOnInit() {
  }

  predict() {
    this.selectedMedicine = this.predictForm.value.medicine;
    this.selectedOption = this.predictForm.value.option[0];
    const predictionRequest: PredictionRequest = {
      medicine: this.predictForm.value.medicine,
      year: this.predictForm.value.year,
      month: this.predictForm.value.month,
      withCovid: this.selectedOption == 'b' ? true : false,
    };

    this.predictionSubscription = this.predictionService.getPrediction(predictionRequest).subscribe(
      data => {
        if (data.success) {
          this.predictedValue = parseFloat(data.prediction.toFixed(0));
        } else {
          alert('Prediction Failed, Please Try again');
        }
      },
      error => {
        console.log(error.message);
      }
    );
  }

  seeWhy() {
    if (this.selectedMedicine) {
      const medicine = this.selectedMedicine + '_' + this.selectedOption + '_' + this.predictedValue + '_' +this.predictForm.value.year + '_' + this.predictForm.value.month;
      this.router.navigate(['/seewhy', medicine]);
    } else {
      alert('Please do a prediction first');
    }
  }

}
