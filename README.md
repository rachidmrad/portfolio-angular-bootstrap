# Angular + Bootstrap Portfolio Website

This project is currently live at http://rachidmrad.com


### Getting Started

To get started, simply clone the repository. 

### Starting the local server

Assuming you have node installed, from the project folder run:

```
npm start
```
This will start the local server. You can then load the app in your browser at http://localhost:8000/app/
If npm fails to init, make sure the package.json exists then run 

```
npm install
```

### Using LESS

In a different command prompt window, access portfolio-angular-bootstrap/bower_components/bootstrap and run

```
grunt watch
```
This will start watching for LESS changes.
If grunt fails to init, make sure the package.json that's in the bootstrap dir exists, then run

```
npm install -g grunt-cli
```
then run 

```
grunt watch
```

### The Data

It lives in JSON files in [root]/app/data
The main view's data is in portfolio.json
Each item's data is in an file with the same name as the item's id
