# Welcome to Flight Service

## Complete Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of downloaded project
- Create '.env' file in your directory and the following variables in it
    - 'PORT = 3000'

- Inside 'src/config' folder create 'config.json' file and the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB-PASSWORD>,
    "database": "Flight_search_Db_Dev",# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added db config as listed above, go the src folder from your terminal and execute 'npx sequelize db:create'

- Sequelize cli docs
```
https://github.com/sequelize/cli/blob/main/docs/FAQ.md
``` 