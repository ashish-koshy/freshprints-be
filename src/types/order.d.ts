export interface Order {
    id: string;
    stock_id: string;
    customer_id: string;
    quantity: number;
    total_price: number;
    date: Date;
}