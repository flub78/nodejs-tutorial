# nodejs-tutorial
 
## Javascript

In the javascript directory you will find a set of short javascript examples demonstrating one feature of the language.

All examples can be run by:

    node hello.js
    
## Nodejs

| File |  Description | URL |
| ---- | ---- | ---- |
| app.js |                 main app using local modules |
| gameover.js |         simple event management |
| monmodule.js |        local module used by app.js |
| node_modules  |      local directory for nodejs modules |


### In the servers directory
 
| File |  Description | URL |
| ---- | ---- | ---- |
| hello2.html    |     HTML page used by server_html.js  |
| routes.js            |   small html server using express for routing queries |
| server1.js        |  simplest http server         | http://localhost:9090/ |
| server2.js        |  simple http server generating html manually | http://localhost:9090/ |
| server3.js        |  simple http server logging the requested page |
| server4.js        |  simple http server parsing url parameters |
| server_close.js | simple http server with callback on the close event |
| server_html.js |  simple http server serving two URLs |

## NPM

NPM is bothe the node package repository and the package installer.

### Package repository

https://www.npmjs.com/

https://www.npmjs.com/~flub78

### Package installer

    npm search openssl

    npm install express

To create a package.json:

    npm init
    
    npm adduser

    npm publish
    
    npm unpublish flub78-nodejs-tutorial

## Unit testing

Every project should have a correct test coverage. Every component of the application must be testable (class, module, model and data layer access, view). It must also be possible to test the application end-to-end, for a WEB application, it implies the capacity to control a WEB browser and check the rendered HTML.

It is fundamental to put the tests in place at the beginning of the project. Very few projects started with a poor coverage have been able to catch up.

The test framework should:
* have the capacity to execute assertion based unit tests
* have self descriptive tests
* have the capacity to execute and organize test suites
* be able to provide test coverage information
* support end to end testing
* have an interface with jenkins

So it makes sense to experiment on test framework at the same time than learning the language.
The issue with javascript is to select one, there are so many of them.

A few ones to try:
* Mocha - https://mochajs.org/
* Qunit - http://qunitjs.com/
* unitjs - http://unitjs.com/guide/quickstart.html

### Mocha

Ranked high on the Internet. One positive point is that I have been able to install and try it in 5 minutes. 

Mocha - https://mochajs.org/

See https://www.npmjs.com/package/jenkins-mocha ofr jenkins support

#### Installation

    npm install --global mocha


#### Test

```
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```

## MongoDB

After installation
    # start the server
    mkdir C:\data\db
    cd C:\data\db
    mongod
    
    # start the MongoDB console
    mongo

