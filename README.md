# Project setup on Remote Server 

- Setup SSH connection from Local machine to Remote server
   - generate SSH key-pair in local machine
   - copy pub key from local machine using `cmd` : `cat ~/.ssh/id_rsa.pub`
   - open `authorized_keys` file on remote server and paste the value on the file. Using `cmd` : `nano ~/.ssh/authorized_keys` open the file and paste value if not already exist. 
   - Now back to the local machine terminal and using `cmd` : `ssh user_name@IP_Address` check the connection. If remote machine terminal open then connect is ready to use.

- install git 
- clone the repository on remote server using `cmd` : `git clone ssh_link_from_github`. Here you may need to set SSH connect with github if not set before. If need to setup SSH connect, follow the instuctions:
   - create new `SSH` key-pair using `cmd` : `ssh-keygen -t rsa -b 4096`
   - copy pub key from remote server using `cmd` : `cat ~/.ssh/id_rsa.pub`
   - add New SSH key in github repository
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
   - update shell profile using `cmd` : `source ~/.bashrc`
   - check nvm version using `cmd` : `nvm --version`
   - install node using `cmd` : `nvm install node` 
   - check version `cmd` : `node -v`
   - install redis server. First update apt `sudo apt update`. Then install `redis-server` using `cmd` : `sudo apt install redis-server -y`
   - enable redis-server using `cmd` : `sudo systemctl enable redis-server`
   - start redis-server using `cmd` : `sudo systemctl start redis-server`
   - check status using `cmd` : `sudo systemctl status redis-server`
   - rename .env.dist to .env using `cmd` : `mv .env.dist .env`
   - edit .env file
   - install mongodb : [instalation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
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
      - we can also load `.env` file while runing app using pm2. need to google how to load .env with pm2 for further information.
   - pm2 to integrate with systemd
      - generate a systemd unit file for PM2 using `pm2 startup systemd`
      - above command generates a script to register PM2 with systemd. Copy the output and execute that
      - save pm2 processes using `pm2 save`
      - enable pm2 in systmed using `sudo systemctl enable pm2-<username>`
      - start at boot using `sudo systemctl start pm2-<username>`
      - check status using `sudo systemctl status pm2-<username>`
      


   












