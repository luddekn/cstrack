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

> [!NOTE]
> You need to set up a MySQL server for this application to work.

The MySQL database will store all the data, and the table will be created during the setup process.
## Step 1: Configure the .env File
Create the `.env` file, which will tell Sequelize how to connect to your MySQL server. Below is an example configuration:
```plaintext
DB_USERNAME="mysql-username"
DB_PASSWORD="mysql-password"
DB_NAME="cstrack"
DB_HOST="server-IP"
DB_PORT=3306
DB_DIALECT=mysql
PORT=3000
```

## Step 2: Database Creation
First, create the database in MySQL. Set its name as the value of DB_NAME in the .env file.

```mysql
CREATE DATABASE cstrack;
```

## Step 3: Run the Application with Docker

Using Docker, run the following command. It will download the `cstrack` image and load the `.env` file created in [step 1](#Step-1:-Configure-the-.env-File) into the container:

```Docker
docker run -d --env-file .env -p 3000:3000 ludvikkristoffersen/cstrack:latest
```

Now you can visit [http://localhost:3000/](http://localhost:3000/)
