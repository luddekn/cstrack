<p align="center">
  <a href="https://nodejs.org/en"><img alt="NodeJS" src="https://custom-icon-badges.demolab.com/badge/-NodeJS-green?style=for-the-badge"/></a> 
  <a href="https://expressjs.com/"><img alt="ExpressJS" src="https://custom-icon-badges.demolab.com/badge/-ExpressJS-white?style=for-the-badge"/></a> 
  <a href="https://www.mysql.com/"><img alt="MySQL" src="https://custom-icon-badges.demolab.com/badge/-MySQL-blue?style=for-the-badge"/></a> 
  <a href="https://sequelize.org/"><img alt="Sequelize" src="https://custom-icon-badges.demolab.com/badge/-Sequelize-lightblue?style=for-the-badge"/></a> 
  <a href="https://getbootstrap.com/"><img alt="Bootstrap" src="https://custom-icon-badges.demolab.com/badge/-Bootstrap-purple?style=for-the-badge"/></a> 
  <a href="https://hub.docker.com/r/ludvikkristoffersen/cstrack"><img alt="Docker" src="https://custom-icon-badges.demolab.com/badge/-Docker-blue?style=for-the-badge"/></a> 
</p>

---

<p align="center"><strong>Simple web interface for keeping track of CS2 item investments.</strong></p>

---

# Installation

## Database Creation
**NB! You need to setup a MySQL server in order for this application to work**

The MySQL database will store all items. The table is created [here](https://github.com/luddekn/cstrack/blob/main/models/items.js).

You only need to create the database in MySQL and set its name as the value of `DB_NAME` in the `.env` file (example of the .env file can be located [here](https://github.com/luddekn/cstrack/blob/main/env_example)).

```mysql
CREATE DATABASE cstrack;
```

## Docker

First, create the `.env` file, this file will tell Sequelize how to connect to your MySQL server:

```plaintext
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME=""
DB_HOST="127.0.0.1"
DB_PORT=3306
DB_DIALECT=mysql
PORT=3000
```

Using Docker, run this command, this will download the `cstrack` image and load the `.env` file into the container:

```Docker
docker run -d --env-file .env -p 3000:3000 ludvikkristoffersen/cstrack:latest
```

Now you can visit [http://localhost:3000/](http://localhost:3000/)
