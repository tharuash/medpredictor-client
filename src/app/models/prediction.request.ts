// Prediction request model
export interface PredictionRequest {
    medicine: string;
    month: number;
    year: number;
    withCovid: boolean;
}
