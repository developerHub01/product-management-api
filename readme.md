# Product management API

## Live link: https://product-management-api-five.vercel.app


## Process of running project
- Download or clone repo
- Run that command in terminal

```ts
npm install
```
```ts
npm run start:build // for runing in development environment
// or
npm run start:prod // for runing in production environment
```

Add post and mongodb database uri in example.env file and rename it in .env
```ts
PORT=
MONGO_URI=
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
POST    /api/products                 // create products
GET     /api/products                  // all products
GET     /api/products?searchTerm=term  // search products
GET     /api/products/:productId       // search product by productId
PUT     /api/products/:productId       // update product by productId
DELETE  /api/products/:productId    // delete product by productId
```
-------------------


### Orders api
-------------------
```ts
POST  /api/orders            // create orders
GET   /api/orders             // all orders
GET   /api/orders?email=term  // search orders by email
```
-------------------
