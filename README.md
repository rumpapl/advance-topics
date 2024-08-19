# Project Setup

1. **Clone the Repository:**

   - Download the repository to your local machine using:

     ```bash
     git clone <repository-url>
     ```

2. **Switch to the Branch:**

   - Change to the `event-emitter` branch:

     ```bash
     git checkout event-emitter
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

# Event Emitter

## Sources & Metarials

[Event-Emitter - Node.js v22.6.0 documentation](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)

[Event-Driven Architecture in Node.js](https://dev.to/learn-to-earn/event-driven-architecture-in-nodejs-1o98)

[Understanding Node.js Event-Driven Architecture](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
