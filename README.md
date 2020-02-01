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
