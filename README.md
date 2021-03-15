# STRV_ADDRESS_BOOK
Ready-to-use API Project - Address Book API 
Manage address book contacts using Node.js Express.js MongoDB and FirestoreDB

## Getting started
These instructions will guide you through the project in order to set up and run it either on your local machine or to deploy the project on a live system (See deployment for notes).
This is a basic API skeleton written using JavaScript ES6. Very useful to building a RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks (Angular, Reactjs, etc).

This project will run on **NodeJs** using **MongoDB** and **FirestoreDB** as databases. I had tried to maintain the code structure easy so it can be easily adopted.

## Features

- Basic Authentication (Register/Login with hashed password)
- Account confirmation with 4 (Changeable) digit OTP.
- Email helper ready just import and use.
- JWT Tokens, make requests with a token after login with `Authorization` header.
- Pre-defined response structures with proper status codes.
- Included CORS.
- **Contact** example with Read and Write operations and wiht potentail extension to full **CRUD**.
- Validations added.
- Included API collection for Postman.
- Light-weight project.

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** 

## How to install

### Using Git (recommended)

1.  Clone the project from github.

```bash
git clone https://github.com/Tigran-001/STRV_ADDRESS_BOOK.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing in the root dirctory (Git or manual download)

```bash
npm install
```

### Setting up environments

1.  Create .env file in root directory containing the following key-value pairs
        MONGO_URI=[Mongo server address. note: don't forget to add /contacts collection, like: mongodb://(address)/contacts],
        PORT=[Choose port to run nodejs server],
        HOST=[optional],
        HOST_URL=[optional],
        jwtPrivateKey=[Choose any Private/Secret Key]
        
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.


## How to run

### Running API server locally

```bash
npm start
```

You will know server is running by checking terminal:

```bash
info: Server is running on port [of your choice]
```

```bash
info: MongoDB Connected...

Press CTRL + C to stop the process.
```

### Creating new models

If you need to add more models to the project just create a new file in `/model/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes` it will be loaded dynamically.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.


## Bugs or improvements

Every project needs improvements, looking forward to receiving feedback about any bugs or improvements.

## Deployment

Don't forget to add environment variables when deploying on Heroku

To test calls on the API use the collaboration platform for API development e.g. POSTMAN:

1) To Register - POST request to https://stormy-sands-38121.herokuapp.com/api/address-book/register
        required scheme in the BODY:
      {
          "email": "email@gmail.com",
          "password": "123456"
      }
      
2) To Login - POST request to https://stormy-sands-38121.herokuapp.com/api/address-book/login
         required scheme in the BODY:
      {
          "email": "email@gmail.com",
          "password": "123456"
      }
3) To Add a contact - POST request to https://stormy-sands-38121.herokuapp.com/api/address-book
      {
           firstName: "Name
           lastName: "Surname
           phoneNumber: "123456789"
           address: "YourAddress"
      }
4) To Read all contacts - GET request to https://stormy-sands-38121.herokuapp.com/api/address-book 


## Author
Tigran Avakyan

