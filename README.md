## NOTABLES

Added ng add @angular/elements and ng add ngx-build-plus : Needed for converting angular project to single file
Added npm i -g http-server --save : Needed to host the single file angular project  
Added child component
Added routing to child in app component
Added input param in app component
Added emit in app component
Modified bootstrapping : Refer https://medium.com/swlh/build-micro-frontends-using-angular-elements-the-beginners-guide-75ffeae61b58
Modified angular.json to use ngx-build-plus:build

Build angular project using ng build --prod --output-hashing none --single-bundle true
Deploy dist/angular-project using http-server ./dist/angular-project/ -p 8081

Added run task to combine build and deploy in one command

Pushed sample code to https://github.com/hackerspark/SimpleMicroFrameworkAngular which is not a submodule to repo https://github.com/hackerspark/Micro

# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

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
