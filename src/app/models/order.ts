// Order model
export interface Order {
    orderId: number;
    medicine: string;
    year: number;
    month: number;
    quantity: number;
    isPredicted: boolean;
    note: string;
}
