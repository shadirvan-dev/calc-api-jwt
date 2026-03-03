# Innovature Backend Assignment Task 1
- Framework : Nestjs with Express Adapter
## Features 

- Generate JWT on Successful Login
- Calc endpoints that perform basic Arithmetic operations

## API Endpoints

### Auth Operation

User Login :  **POST** : /auth/login

### Calc Operations

Addition       : **GET**   : /add?a={{num1}}&b={{num2}}

Substraction   : **GET**   : /substract?a={{num1}}&b={{num2}}

Multiplicaton  : **GET**   : /multiply?a={{num1}}&b={{num2}}

Division  : **GET**   : /divide?a={{num1}}&b={{num2}}

## How To Test Backend?

- Clone Repository
- Install Dependencies : `npm install`
- Run Server : `npm run start:dev`
- Import The postman Collection on postman app
- The username and passowrd are in /src/users/users.service.ts it can be modified. The default one is 

        { userId: 1, username: "shadirvan", password: "test123" },
        { userId: 2, username: "user", password: "user123" }

