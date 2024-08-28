# Setup and Installation

<details>
   <summary>Guide</summary>
   1. **Clone the Repository:**

- Download the repository to your local machine using:

  ```bash
  git clone <repository-url>
  ```

2.  **Switch to the Branch:**

    - Change to the `child-process` branch:

      ```bash
      git checkout child-process
      ```

3.  **Project setup:**
    - Rename the `.env.dist` as `.env`
4.  **Execute the Following Commands:**

    1.  **Install Dependencies:**

        ```bash
        make install
        ```

        - This command installs all necessary dependencies for the project.

    2.  **Start Containers:**

        ```bash
        make up
        ```

        - This command starts all the defined containers.

    3.  **Clean Up:**

              ```bash
              make clean
              ```

              - This command stops and removes all running containers.

        </details>

# The Child Processes Module

- Use the child_process module to create child processes for running system commands.
- Enable communication between child processes through a messaging system.
- Control and manipulate the input and output streams of child processes.
- Pass arguments to OS commands executed within child processes.
- Pipe the output of one command as the input to another, leveraging Node.js streams.
<!-- - There are four different ways to create a child process in Node
<details>
   <summary>spawn()</summary>
</details>
<details>
   <summary>fork()</summary>
</details>
<details>
   <summary>exec()</summary>
</details>
<details>
   <summary>execFile()</summary>
</details> -->

## Resources & Materials

[Unleashing Node.js: Mastering the Power of Child Process Forking](https://medium.com/@ashutoshbkd/unleashing-node-js-mastering-the-power-of-child-process-forking-38750f093091)

[Node.js Child Processes: Everything you need to know](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)

[Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
