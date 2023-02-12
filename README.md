# freshprints-be

!!IMPORTANT!! 
Data source file is under `src/stock/data.json` (Please refer to it for data samples)

Run `npm start` and then either use Postman to hit the endpoints or run `npm test` to run the test cases:




For updating existing stock data:
Make POST call with the following request:
`/update-stock`:
{
  apparel_id,
  size,
  units,
  unit_price,
}
(this would update the json file under `src/stock`);




For checking stock availability:
Make a POST call with the following request:
POST call
`/availability`:
[
    {
        apparel_name,
        size,
    }
]




For checking best deals:
make a POST call with the following request:
`/best-deal`:
[
    {
        apparel_name,
        size,
    }
];