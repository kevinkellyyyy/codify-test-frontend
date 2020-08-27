# Kell's Socmed

View the deployed version here at [kells-socmed.vercel.app](kells-socmed.vercel.app)<br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4. and Bootstrap<br>
For offline use, first you clone it after that follow the code below using terminal<br>
```
npm install
npm install bootstrap --save
npm install --save @ng-bootstrap/ng-bootstrap 
```
The apis used in this project is obtained from [dummyapi.io](https://dummyapi.io) and has a call limit of 500 calls per 24 hours. So if an error code 429 appears on the console, then you can create a new account to get a new api key. The api key is located in the `all-svc.service.ts` file 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
