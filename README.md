<p align="center">
  <a href="https://nodejs.org/en"><img alt="NodeJS" src="https://custom-icon-badges.demolab.com/badge/-NodeJS-green?style=for-the-badge"/></a> 
  <a href="https://expressjs.com/"><img alt="ExpressJS" src="https://custom-icon-badges.demolab.com/badge/-ExpressJS-white?style=for-the-badge"/></a> 
  <a href="https://www.mysql.com/"><img alt="MySQL" src="https://custom-icon-badges.demolab.com/badge/-MySQL-blue?style=for-the-badge"/></a> 
  <a href="https://sequelize.org/"><img alt="Sequelize" src="https://custom-icon-badges.demolab.com/badge/-Sequelize-lightblue?style=for-the-badge"/></a> 
  <a href="https://getbootstrap.com/"><img alt="Bootstrap" src="https://custom-icon-badges.demolab.com/badge/-Bootstrap-purple?style=for-the-badge"/></a> 
</p>

---

<p align="center"><strong>Simple web interface for keeping track of CS2 item investments.</strong></p>

---

# Installation

_soon_

# Database Creation

The MySQL database will store all items. The table is created [here](https://github.com/luddekn/cstrack/blob/main/models/items.js). 

You only need to create the database in MySQL and set its name as the value of `DB_NAME` in the `.env` file (example of the .env file can be located [here](https://github.com/luddekn/cstrack/blob/main/env_example)). 

Also, make sure that the MySQL server and database are accessible.

```mysql
CREATE DATABASE cstrack;
```
