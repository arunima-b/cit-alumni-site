# Getting started

### Clone this repo
HTTPS: `$ git clone https://github.com/uo-cit-alumni/cit-alumni-site`

or SSH: `$ git clone git@github.com:uo-cit-alumni/cit-alumni-site`

then `$ cd cit-alumni-site`

### Install dependencies
You should have yarn, an npm wrapper: `$ npm i -g yarn`.

In the project directory, run `$ yarn install`.

### Database connection file
Create a file `secret/db.js` that looks like:

```
exports = {
  host: 'localhost',
  user: 'citadmin',
  password: '<password>',
  database: 'citalum'
};
```

### Start database
Install MySQL: https://dev.mysql.com/doc/mysql-getting-started/en/

`$ sudo service mysql [start | stop | restart | status]`

#### Create citadmin user
`$ mysql -u root -p`

`mysql> CREATE USER 'citadmin'@'localhost' IDENTIFIED BY '<password>';`

`mysql> GRANT ALL PRIVILEGES ON *.* TO 'citadmin'@'localhost';`

`mysql> FLUSH PRIVILEGES;`

#### Create tables


### Start server

There are two servers: the one that came with create-react-app, and the express
server found in server.js, where our API will live.

`$ yarn build` - Bundles files into `build/`.

`$ yarn start` - Starts our express server (must build first).

`$ yarn dev` - Starts development server that came with create-react-app.
