import { Injectable } from '@angular/core';
import { PredictionRequest } from '../models/prediction.request';
import { PredictionResponse } from '../models/prediction.response';
import { Observable } from 'rxjs';
import { Paths } from '../paths';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  getPrediction(predictionRequest: PredictionRequest): Observable<PredictionResponse> {
    const url = Paths.flaskAPIUrl + `/predict`;
    return this.http.post<PredictionResponse>(url, predictionRequest);
  }
}
