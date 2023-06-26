# Backend

## Model

1. User
2. Product
3. Cart
4. Order

## User

### Models

- User Model

```yaml
{
  name:
    {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [2, "Name should have more than 2 characters"],
    },
  email:
    {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
  password:
    {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
  avatar:
    {
      type: String,
      required: [true, "Please Provide Profile Image"],
      trim: true,
    },
  createdAt: { type: Date, default: Date.now },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
}
```

## User APIs

### POST http://localhost:4000/api/v1/user/register

- Create a user document from request body. Request body must contain image.
- Save password in encrypted format. (used bcryptjs)
- **Response format**
  - _**On success**_ - Return HTTP status 201. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "user":
    {
      "name": "Rupam",
      "email": "rupam@gmail.com",
      "password": "$2a$10$UMY5NnQf.giD52Lo.qjX..q6EOjTomEhfaYJyebYfIXcsjlTpBxGS",
      "avatar": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/download.jpeg",
      "_id": "64993c6f1b244cc09b41d274",
      "createdAt": "2023-06-26T07:21:19.104Z",
      "__v": 0,
    },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTkzYzZmMWIyNDRjYzA5YjQxZDI3NCIsImlhdCI6MTY4Nzc2NDA3OSwiZXhwIjoxNjg3ODUwNDc5fQ.-bX56FpAadqCDV7616ZDU3Nsfy54vihnGrpPn9Qs2QM",
}
```

### POST http://localhost:4000/api/v1/user/login

- Allow an user to login with their email and password.
- **Response format**
  - _**On success**_ - Return HTTP status 200 and JWT token in response body. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "user":
    {
      "_id": "64993c6f1b244cc09b41d274",
      "name": "Rupam",
      "email": "rupam@gmail.com",
      "password": "$2a$10$UMY5NnQf.giD52Lo.qjX..q6EOjTomEhfaYJyebYfIXcsjlTpBxGS",
      "avatar": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/download.jpeg",
      "createdAt": "2023-06-26T07:21:19.104Z",
      "__v": 0,
    },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTkzYzZmMWIyNDRjYzA5YjQxZDI3NCIsImlhdCI6MTY4Nzc2NDEwMywiZXhwIjoxNjg3ODUwNTAzfQ.k_Fg819oNd9fFHqrCrv_Lb7RlhPSDcUP8q2UdEN9e38",
}
```

### GET http://localhost:4000/api/v1/user/logout

- logout user if Only the user login
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "sucess": true, "message": "Logged Out Successfully" }
```

### POST http://localhost:4000/api/v1/user/password/forgot

- User can forgot the password using their Email_id
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "success": true, "message": "Email sent to rupam@gmail.com successfully" }
```

### PUT http://localhost:4000/api/v1/user/password/reset/:token

- User can reset the password and put the new confirm password and password.
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "user":
    {
      "_id": "64993c6f1b244cc09b41d274",
      "name": "Rupam",
      "email": "rupam@gmail.com",
      "avatar": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/download.jpeg",
      "createdAt": "2023-06-26T07:21:19.104Z",
      "__v": 0,
      "password": "$2a$10$Qh/Y6j6.o5jSM836yjS3POlVQU8MsC/wxqHtAZk3U4ANTwjyQILv2",
    },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTkzYzZmMWIyNDRjYzA5YjQxZDI3NCIsImlhdCI6MTY4Nzc2NDE2MiwiZXhwIjoxNjg3ODUwNTYyfQ.goU1Brt18EX6ewxmXMdejoC3cGf0gHwsoiHhmGa-0B4",
}
```

### GET http://localhost:4000/api/v1/user/user/me

- User can view their own profile.
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "user":
    {
      "_id": "64994649e50d7959bd931f10",
      "name": "Rupam",
      "email": "rupam@gmail.com",
      "avatar": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/download.jpeg",
      "createdAt": "2023-06-26T08:03:21.771Z",
      "__v": 0,
    },
}
```

### DELETE http://localhost:4000/api/v1/user/user/me/delete

- User can delete their own profile
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "success": true, "message": "User Deleted Successfully" }
```

## Product

### Models

- Product Model

```yaml
{
    title: {
      type: String,
      required: [true, "Please Enter title of the Product"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter Description of the Product"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please Enter Price of the Product"],
    },
    productImage: {
      type: String,
      required: [true, "Please Provide Product Image"],
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
```

## Product APIs

### POST http://localhost:4000/api/v1/product/new

- Create a Product document from request body. Request body must contain product image.
- **Response format**
  - _**On success**_ - Return HTTP status 201. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "product":
    {
      "title": "Canon Camera 850D",
      "description": "best camra for wedding photography",
      "price": 80000,
      "stock": 500,
      "productImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_850d_01.jpg",
      "deletedAt": null,
      "_id": "64996202cc0aa86de2b95947",
      "createdAt": "2023-06-26T10:01:38.287Z",
      "updatedAt": "2023-06-26T10:01:38.287Z",
      "__v": 0,
    },
}
```

### GET http://localhost:4000/api/v1/product/all

- Only Login user can view the product.
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "products":
    [
      {
        "_id": "64996195faea92165322d3fc",
        "title": "Canon Camera 850D",
        "description": "best camra for wedding photography",
        "price": 80000,
        "stock": 500,
        "productImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_850d_01.jpg",
        "deletedAt": null,
        "createdAt": "2023-06-26T09:59:49.554Z",
        "updatedAt": "2023-06-26T09:59:49.554Z",
        "__v": 0,
      },
      {
        "_id": "64996202cc0aa86de2b95947",
        "title": "Canon Camera 250D",
        "description": "best camera for wild-life photography",
        "price": 76500,
        "stock": 500,
        "productImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_250d_01.jpg",
        "deletedAt": null,
        "createdAt": "2023-06-26T10:01:38.287Z",
        "updatedAt": "2023-06-26T10:01:38.287Z",
        "__v": 0,
      },
    ],
}
```

### GET http://localhost:4000/api/v1/product/:id

- Get single product with their id .
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "product":
    {
      "_id": "64996195faea92165322d3fc",
      "title": "Canon Camera 850D",
      "description": "best camra for wedding photography",
      "price": 80000,
      "productImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_850d_01.jpg",
      "deletedAt": null,
      "stock": 500,
      "createdAt": "2023-06-26T09:59:49.554Z",
      "updatedAt": "2023-06-26T09:59:49.554Z",
      "__v": 0,
    },
}
```

### PUT http://localhost:4000/api/v1/product/:id

- User can update the product using their id;
- **Response format**
  - _**On success**_ - Return HTTP status 200. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  "success": true,
  "product":
    {
      "title": "Canon Camera 850D",
      "description": "best camra for wedding photography",
      "price": 60000,
      "stock": 500,
      "productImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/RupamStore/canon_eos_850d_01.jpg",
      "deletedAt": null,
      "_id": "64996202cc0aa86de2b95947",
      "createdAt": "2023-06-26T10:01:38.287Z",
      "updatedAt": "2023-06-26T10:01:38.287Z",
      "__v": 0,
    },
}
```

### DELETE http://localhost:4000/api/v1/product/:id

- User can Delete the product using their id;
- **Response format**
  - _**On success**_ - Return HTTP status 200. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "success": true, "message": "Product Deleted Successfully" }
```

### Models

- Cart Model

```yaml
{
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
      unique: true,
      trim: true,
    },
    items: {
      type: [
        {
          productId: {
            type: ObjectId,
            ref: "Product",
            required: [true, "Please provide productId!"],
          },
          quantity: {
            type: Number,
            required: [true, "Please enter a Qty!"],
            min: 1,
          },
          price: {
            type: Number,
            require: [true, "Please provide price of product!"],
            select: false,
          },
        },
      ],
    },
    totalPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    totalQuantity: {
      type: Number,
      default: 1,
    },
    totalItems: {
      type: Number,
      default: 1,
      required: true,
      // comment: 'Holds total number of items in the cart',
    },
  },
  { timestamps: true }
```

## Cart APIs

### POST http://localhost:4000/api/v1/user/cart

- Create a Cart with added to particular product.
- **Response format**
  - _**On success**_ - Return HTTP status 201. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{
  {
    "status": true,
    "message": "Success",
    "data":
      {
        "newCart":
          {
            "_id": "649986b081c37f54eb91fcf6",
            "userId": "64995bb8999a6a16e12ad0a1",
            "items":
              [
                {
                  "productId": "64997eaac1ef17e23c8072f0",
                  "quantity": 21,
                  "_id": "649986b081c37f54eb91fcf7",
                },
                {
                  "productId": "64997eaac1ef17e23c807240",
                  "quantity": 1,
                  "_id": "649986b081c37f54eb91fc47",
                },
              ],
            "totalPrice": 1803456,
            "totalQuantity": 22,
            "totalItems": 2,
            "createdAt": "2023-06-26T12:38:08.968Z",
            "updatedAt": "2023-06-26T13:15:53.987Z",
            "__v": 1,
          },
      },
  },
}
```
