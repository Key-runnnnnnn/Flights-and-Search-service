# Welcome to Flight Service

## Project Setup
- clone the project on your local
- Execute 'npm install' on the same path as of your root directory of downloaded project
- Create '.env' file in your directory and the following variables in it
    - 'PORT = 3000'

- Inside 'src/config' folder create 'config.json' file and the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB-PASSWORD>,
    "database": "Flight_search_Db_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added db config as listed above, go the src folder from your terminal and execute 'npx sequelize db:create'