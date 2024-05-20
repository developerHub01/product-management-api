# Product management API

## Process of running project
- Download or clone repo
- Run that command in terminal

```ts
npm install
```
```ts
npm install

npm run start:build
// or
npm run start:prod
```

-------------------
## Project technologies & tools:
- Typescript
- Node.js
- Express
- Mongodb
- Mongoose
- Mongodb compass
- Postman
- VS code
-------------------

## Available routes

### Products api
-------------------
```ts
POST /api/products                 // create products
GET /api/products                  // all products
GET /api/products?searchTerm=term  // search products
GET /api/products/:productId       // search product by productId
PUT /api/products/:productId       // update product by productId
DELETE /api/products/:productId    // delete product by productId
```
-------------------


### Orders api
-------------------
```ts
POST /api/orders            // create orders
GET /api/orders             // all orders
GET /api/orders?email=term  // search orders by email
```
-------------------