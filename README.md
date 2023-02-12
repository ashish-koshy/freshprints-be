# freshprints-be

!!IMPORTANT!! 
Data source file is under `src/stock/data.json`

Please use postman to hit the endpoints:

POST call
`/update-stock`:
{
  apparel_id: 'Please refer to the data for apparel ids under src/stock/data.json'
  size: 'small' 'medium' 'large' etc.
  units: number
  unit_price: number
}
(this would update the json file under `src/stock`);




Forc checking stock availability:
Make a POST call with the following request:
POST call
`/availability`:
[
    {
        apparel_name: 'Winter Socks', 'Boxers', 'Panties' etc.
        size: 'small' 'medium' 'large' etc.
    }
]




For checking best deals:
make a POST call with the following request:
`/best-deal`:
[
    {
        apparel_name: 'Winter Socks', 'Boxers', 'Panties' etc.
        size: 'small' 'medium' 'large' etc.
    }
]



For running tests execute:
`npm test`