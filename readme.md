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
  password: 'secret',
  database: 'db_name'
};
```
### 3. Run it
`$ yarn dev` - Start development server.

`$ yarn build` - Bundles files into `build/`.

`$ yarn start` - Starts prod server (must build first).
