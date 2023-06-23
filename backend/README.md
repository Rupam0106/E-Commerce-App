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
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name should have more than 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
}
```

## User APIs 
### POST /register
- Create a user document from request body. Request body must contain image.
- Save password in encrypted format. (used bcryptjs)
- __Response format__
  - _**On success**_ - Return HTTP status 201. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "success": true,
    "user": {
        "name": "Uttam Gupta",
        "email": "uttam.gupta@gmail.com",
        "password": "$2a$10$XOn4oKZZ05wjPexJtFv19e5EzM7j8wip/3eTqkgVP1yvhAwr2OZ7W",
        "avatar": {
            "public_id": "myCloud.public_id",
            "url": "myCloud.secure_url"
        },
        "_id": "64959933dbea68c7fe34108b",
        "createdAt": "2023-06-23T13:08:03.320Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTU5OTMzZGJlYTY4YzdmZTM0MTA4YiIsImlhdCI6MTY4NzUyNTY4MywiZXhwIjoxNjg3NjEyMDgzfQ.AXk2F7hXTsMZo1iuu-H9NvSndOR2Xv0wjox28EqNGgg"
}
```

### POST /login
- Allow an user to login with their email and password.
- __Response format__
  - _**On success**_ - Return HTTP status 200 and JWT token in response body. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "success": true,
    "user": {
        "avatar": {
            "public_id": "myCloud.public_id",
            "url": "myCloud.secure_url"
        },
        "_id": "6495968f9a8c3fd255153dad",
        "name": "Uttam Gupta",
        "email": "uttam1@gmail.com",
        "password": "$2a$10$9.Git9Dk9i5qPZVHlVZaOO7zeV8BN/eUzsfrdkynL.iJjESL/3jT.",
        "createdAt": "2023-06-23T12:56:47.118Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTU5NjhmOWE4YzNmZDI1NTE1M2RhZCIsImlhdCI6MTY4NzUyNTAzOSwiZXhwIjoxNjg3NjExNDM5fQ.fiU4cxi7ya52r7DdbO9IR0-8rlk-GaKvrVTjSdA9UYs"
}
```

### GET /logout
- logout user if Only the user login 
- __Response format__
  - _**On success**_ - Return HTTP status 200. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
```yaml
{
    "sucess": true,
    "message": "Logged Out Successfully"
}
```