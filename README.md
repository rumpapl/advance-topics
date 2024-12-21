# Project setup on Remote Server 

- Setup SSH connection from Local machine to Remote server
   - generate SSH key-pair in local machine
   - copy pub key from local machine using `cat ~/.ssh/id_rsa.pub`
   - open `authorized_keys` file on remote server and paste the value on the file. Using `nano ~/.ssh/authorized_keys` open the file and paste value if not already exist. 
   - Now back to the local machine terminal and using `ssh user_name@IP_Address` check the connection. If remote machine terminal open then connect is ready to use.

- install git 
- clone the repository on remote server using `git clone ssh_url_from_github`. Here you may need to set SSH connect with github if not set before. If need to setup SSH connect, follow the instuctions:
   - create new `SSH` key-pair using `ssh-keygen -t rsa -b 4096`
   - copy pub key from remote server using `cat ~/.ssh/id_rsa.pub`
   - add New SSH key in github repository as `deploy key`
    - if the connect successfully stablished, you can clone the targeted reposigoty.

- for Production Deployments we should clone the project under `/opt` folder. Navigate into the folder and clone the project.
   ```
   sudo mkdir -p /opt/myproject
   sudo chown $USER:$USER /opt/myproject
   cd /opt/myproject
   git clone <repository-URL>
   ```
-  install node and other dependencies (mongo and redis).
   - install `nvm` uing `curl` cmd : `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
   - update shell profile using `source ~/.bashrc`
   - check nvm version using `nvm --version`
   - install node using `nvm install node` 
   - check version `node -v`

   - **install redis server**:
      - First update apt `sudo apt update`. Then install `redis-server` using `sudo apt install redis-server -y`
      - enable redis-server using  `sudo systemctl enable redis-server`. This command ensures that the Redis server starts automatically when the system boots.
      - start redis-server using `sudo systemctl start redis-server`
      - check status using `sudo systemctl status redis-server`
   
   - **install mongodb**:
      - [instalation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
      - after successfully run the mongodb we should enable the mongo-server using `sudo systemctl enable <mongo-server>`. This command ensures that the MongoDB server starts automatically when the system boots.
      - create `admin-use`r for mongodb following steps:
         - open mongo-shell using `mongosh`
         - switch to admin db using `use admin`
         - create user using 
            ``` mongo
               db.createUser({
               user: "devel",
               pwd: "devel",
               roles: []
               })
            ```
         - close mongo-shell using `exit`
         - check db connection using `mongosh "mongodb://devel:devel@localhost:27017/flat-m8?authSource=admin"`
         - if connection successfully established it will open flat-m8 db on terminal
   - rename .env.dist to .env using `mv .env.dist .env`
   - edit .env file and make sure all the `DSN url` are set properly.
   - Test application:
      - to generate seed run the following cmd from projet root  `node src/scripts/database/index.js`
      - run the project usig `npm start` to check project setup successfully
   - install pm2 using `npm install -g pm2`
      - varify the instalation using `pm2 --version`
      - navigate to the directory where Node.js app is located and run `pm2 start index.js --name app_name`
      - varify the running process using `pm2 list`
      - restart the app using `pm2 restart app_name`
      - stop the app using `pm2 stop app_name`
      - delete the app using `pm2 delete app_name`
      - view logs using `pm2 logs app_name`
      - inspect app details using `pm2 describe app_name`
      - monitor the app using `pm2 monit`
      - we can also load `.env` file while runing app using pm2. 
         - install dotenv using `npm install dotenv`
         - load `.env` in the Node.js App root file (e.g., app.js or index.js). Add the following line at the top of the file `require('dotenv').config();`
         - deploy with PM2:
            - create or edit an ecosystem.config.js file for PM2 in project root and add the following
               ```
               module.exports = {
                  apps: [
                     {
                           name: "my-node-app",
                           script: "./index.js",
                           env_file: ".env", // PM2 will load variables from the .env file
                           env: {
                              NODE_ENV: "production",
                              // dotenv variables are automatically loaded
                           }
                     }
                  ]
               };
               ```
            - use PM2 to start the application using `pm2 start ecosystem.config.js`

   - pm2 to integrate with systemd
      - generate a systemd unit file for PM2 using `pm2 startup systemd`
      - above command generates a script to register PM2 with systemd. Copy the output and execute that
      - save pm2 processes using `pm2 save`
      - enable pm2 in systmed using `sudo systemctl enable pm2-<username>`
      - start at boot using `sudo systemctl start pm2-<username>`
      - check status using `sudo systemctl status pm2-<username>`
      


   












