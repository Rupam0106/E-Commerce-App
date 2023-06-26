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

### POST /register

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

### POST /login

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

### GET /logout

- logout user if Only the user login
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "sucess": true, "message": "Logged Out Successfully" }
```

### GET /password/forgot

- User can forgot the password using their Email_id
- **Response format**
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

```yaml
{ "success": true, "message": "Email sent to rupam@gmail.com successfully" }
```

### GET /password/reset/:token

- User can reset the password using put the confirm password and password.
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
