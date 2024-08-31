# Setup and Installation

<details>
   <summary>Guide</summary>

1. **Clone the Repository:**

   - Download the repository to your local machine using:

     ```bash
     git clone <repository-url>
     ```

2. **Switch to the Branch:**

   - Change to the `child-process` branch:

     ```bash
     git checkout child-process
     ```

3. **Project setup:**

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

-   <details>
      <summary>Methods: Pros and Cons</summary>
      
      ### 1. `spawn()`
      **Pros:**
      - Efficient for large data output as it uses streams, avoiding memory overhead.
      - Doesn't create a shell, making it more secure and faster for simple commands.
      - Can handle real-time output processing.
      
      **Cons:**
      - More complex syntax when shell features (like pipes) are needed.
      - Requires handling streams manually.
      
      ### 2. `exec()`
      **Pros:**
      - Simple syntax, allowing the use of shell commands and features (like pipes).
      - Outputs the full command result via a callback, making it easy to work with small data.
      
      **Cons:**
      - Buffers the entire output in memory, leading to potential memory issues with large data.
      - Slower and less efficient for large outputs compared to `spawn()`.
   
      ### 3. `execFile()`
      **Pros:**
      - More secure than `exec()` as it doesn’t execute within a shell.
      - Slightly more efficient since it skips the shell invocation.
      - Ideal for executing binary files directly.
      
      **Cons:**
      - Lacks support for shell features (e.g., pipes), limiting its flexibility.
      - Not suitable for commands that require shell syntax.
   
      ### 4. `fork()`
      **Pros:**
      - Specifically designed for spawning Node.js processes, enabling inter-process communication (IPC).
      - Efficient for distributing workload across multiple processes, useful in scaling applications.
      - Simplifies message passing between parent and child processes.
      
      **Cons:**
      - Only works with Node.js scripts, not arbitrary system commands.
      - Can increase complexity when managing multiple child processes.
      - Limited by the number of processes that can be forked due to system resources.
   </details>

## Resources & Materials

[Unleashing Node.js: Mastering the Power of Child Process Forking](https://medium.com/@ashutoshbkd/unleashing-node-js-mastering-the-power-of-child-process-forking-38750f093091)

[Node.js Child Processes: Everything you need to know](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)

[Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
