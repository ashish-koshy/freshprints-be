import express, { Express, Request, Response } from 'express';
import { checkBestDeal, checkStock, updateStock } from './stock';
import { StockCheck, StockUpdate } from './stock/types';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(express.json());

app.post('/update-stock', (request: Request, response: Response) => {
  let status = 1;
  const input: StockUpdate | StockUpdate[] = request.body;
  if (Array.isArray(input))
    for (const stock of input)
      status *= updateStock(stock) ? 1 : 0;
  else
    status = updateStock(input) ? 1 : 0; 
  response.json({ success: status === 1 });
});

app.post('/availability', (request: Request, response: Response) => {
  const inputs: StockCheck = request.body;
  response.json(checkStock(inputs));
});

app.post('/best-deal', (request: Request, response: Response) => {
  const inputs: StockCheck = request.body;
  response.json(checkBestDeal(inputs));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});