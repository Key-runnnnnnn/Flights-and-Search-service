# Welcome to Flight Service

## Project Setup
- clone the project on your local
- Execute 'npm install' on the same path as of your root directory of downloaded project
- Create '.env' file in your directory and the following variables in it
    - 'PORT = 3000'
    
-Inside 'src/config' folder create 'config.json' file and the following piece of json

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "Flight_search_Db_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
