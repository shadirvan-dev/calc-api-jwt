# Secure Calculator API

This project is a secure calculator api backend that validate user using jwt and allow access to endpoints like add, substract, etc for calculation.

# Testing 
- Clone the repo : github.com/shadirvan-dev/calc-api-jwt
- Install npm dependencies : `npm install`
- Run Server : `npm run start:dev`
- Use the credentials : `shadirvan` and `test123` for jwt token generation in `/auth/login` endpoint
PS : postman collection are provided which can be imported into postman for the api testing.

## TODO
- [x] Generate module, service, and controller
```
nest g module math
nest g controller math
nest g service math
```
- [x] implement the following endpoints:
  - /add?a=5&b=8
  - substract?a=10&b=3
  - multiply?a=5&b=8
  - divide?a=6&b=3

- [x] Add the Auth using JWT

 
