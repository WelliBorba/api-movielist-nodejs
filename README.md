# Pior Filme do Golden Raspberry Awards

## Description

### It is a RESTful API to make it possible to read the list of nominees and winners in the Worst Picture category at the Golden Raspberry Awards
---
## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/WelliBorba/api-movielist-nodejs.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject

npm install
```
---
## Project structure

```sh
.
├── src
│   ├── Controllers
│   │   └── MovieControllerCache.js
│   ├── Init
│   │   ├── index.js
│   │   └── preLoadCache.js
│   ├── Models
│   │   └── MovieModelCache.js
│   ├── app.js
│   ├── index.js
│   └── routes.js
├── movielist.csv
├── package-lock.json
└── package.json
```
---
## How to run

### Running API server locally

```bash
npm run start
```
1. It will run the server at port 3000.
---
## Implemented endpoints:

Path | Method | Description
---|---|---
/ | GET | All movie list
/awards | GET | Awarded movie list
/winners | GET | Winners movie list
---
## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.