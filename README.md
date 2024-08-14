## Project Setup

1. **Clone the Repository:**

   - Download the repository to your local machine using:

     ```bash
     git clone <repository-url>
     ```

2. **Switch to the Branch:**

   - Change to the `redis-pub-sub` branch:

     ```bash
     git checkout redis-pub-sub
     ```

3. **Execute the Following Commands:**

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

## Findings

1. **Binding the `.env` File:**

   - To make sure environment variables defined in the `.env` file are available to every container, bind the `.env` file in each service:

     ```yaml
     env_file:
       - .env
     ```

2. **Setting Environment Variables:**

   - To define environment variables for a service within a container, use the following syntax in your `docker-compose.yml` file:

     ```yaml
     environment:
       - REDIS_DSN=redis://redis:6379
     ```
