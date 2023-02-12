
import { Entity } from '../enums';
import { getData, setData } from '../data';
import { StockUpdate, Stock, StockCheck, StockAvailability } from './types';

export function updateStock(input: StockUpdate): boolean {
  try {
    const stocks: Stock[] = getData(Entity.stock);
    stocks?.filter(
      search => {
          return search.apparel_id === input.apparel_id 
                  && search.size === input.size
      }
    )?.map(
      stock => {
        input?.units >= 0 && (stock.units = input.units);
        input?.unit_price >= 0 && (stock.unit_price = input.unit_price);
        return stock;
      }
    );
    return setData(Entity.stock, JSON.stringify(stocks, null, 4));
  } catch(ex) {
    console.log(ex);
    return false;
  }
}

export function checkStock(inputs: StockCheck): StockAvailability[] {
  try {
    const results: StockAvailability[] = []; 
    const stocks: Stock[] = getData(Entity.stock);
    for (const input of inputs) {
      stocks?.filter(
        search => {
            return search.apparel_name === input.apparel_name
                    && search.size === input.size
                    && search.units > 0
        }
      )?.map(stock => {
          results.push({
            ...input,
            unit_price: stock.unit_price,
            available_units: stock.units,
            producer: stock.producer,
          });
      });
    }
    return results;
  } catch(ex) {
    console.log(ex);
    return [];
  }
}