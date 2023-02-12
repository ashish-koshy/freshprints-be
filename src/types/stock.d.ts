export interface Stock {
    id: string;
    apparel_id: string;
    size: 'small' | 'medium' | 'large';
    quantity: number;
    price_per_unit: number;
    date_added: Date;
}