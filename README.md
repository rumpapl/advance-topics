# Setup and Installation

<details>
   <summary>Guide</summary>

1. **Clone the Repository:**

   - Download the repository to your local machine using:

     ```bash
     git clone <repository-url>
     ```

2. **Switch to the Branch:**

   - Change to the `email-service` branch:

     ```bash
     git checkout email-service
     ```

3. **Project setup:**

   - Rename the `.env.dist` as `.env`

4. **Execute the Following Commands:**

   1. **Install Dependencies:**

      ```bash
      make install
      ```

   - This command installs all necessary dependencies for the project.

   2. **Start Containers:**

      ```bash
      make up
      ```

   - This command starts all the defined containers.

   3. **Clean Up:**

      ```bash
      make clean
      ```

   - This command stops and removes all running containers.

</details>

## Resources & Materials

[node-cron](https://www.npmjs.com/package/node-cron)

[cron-time-generator](https://www.npmjs.com/package/cron-time-generator)

[crontab guru](https://crontab.guru/)
