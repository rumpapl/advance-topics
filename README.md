# Linux Basic Commands 


- <ins>**_grep_**</ins> : The `grep` command in Unix/Linux is a powerful tool used for searching and manipulating text patterns within files. Its name is derived from the `ed` (editor) command `g/re/p` (globally search for a regular expression and print matching lines), which reflects its core functionality. 

   **Example Usage**:
   - `grep 'pattern' file.txt` : Searches for `pattern` in `file.txt` and displays matching lines.
   - `grep -i 'pattern' file.txt` : Performs a case-insensitive search for `pattern`.
   - `grep -r 'pattern' /path/to/dir` : Recursively searches for `pattern` in all files within the specified directory.


- <ins>**_pwd_**</ins> : The `pwd` command stands for "print working directory." It displays the full path of the current working directory you are in. This is useful for identifying your current location within the file system.

- <ins>**_ls_**</ins> : The `ls` command is used to list files and directories within the current directory. It can also provide additional details, such as file permissions, sizes, and modification dates, when used with options like `-l` or `-a`.

- <ins>**_cd_**</ins> : The `cd` command is short for "change directory." It allows you to navigate between directories in the file system. For example, `cd /home/user` moves you to the specified directory, and `cd ..` moves you up one directory level.

- <ins>**_touch_**</ins> : The `touch` command is used to create an empty file or update the timestamp of an existing file. For example, `touch file.txt` creates an empty file named `file.txt` if it doesn’t already exist.

- <ins>**_mkdir_**</ins> : The `mkdir` command stands for "make directory." It is used to create one or more new directories. For example, `mkdir new_folder` creates a directory named `new_folder`.

- <ins>**_cp_**</ins> : The `cp` command is used to copy files and directories. For example, `cp file.txt backup.txt` copies `file.txt` to `backup.txt`. To copy directories, use the `-r` option (e.g., `cp -r source_dir dest_dir`).

- <ins>**_mv_**</ins> : The `mv` command is used to move or rename files and directories. For example, `mv file.txt new_location/` moves `file.txt` to the specified location, and `mv old_name.txt new_name.txt` renames the file.

- <ins>**_rm_**</ins> : The `rm` command is used to remove files or directories. For example, `rm file.txt` deletes `file.txt`. To remove directories, use the `-r` option (e.g., `rm -r folder/`). **Be cautious with this command, as deleted files cannot be easily recovered.**

- <ins>**_cat_**</ins> : The `cat` command stands for "concatenate." It is used to view, create, or combine text files. For example, `cat file.txt` displays the contents of `file.txt`, and `cat file1.txt file2.txt > combined.txt` combines two files into a new one.

- <ins>**_nano_**</ins> : The `nano` command opens a simple and user-friendly text editor in the terminal. It is used to create or edit text files. For example, `nano file.txt` opens `file.txt` for editing.

- <ins>**_find_**</ins> : The `find` command is used to search for files and directories based on various criteria, such as name, size, or modification date. For example, `find . -name "*.txt"` searches for all `.txt` files in the current directory and its subdirectories.

- <ins>**_ping_**</ins> : The `ping` command is used to check the connectivity between your system and a remote host. It sends ICMP Echo Request packets to the target and waits for a response. For example, `ping google.com` tests connectivity to Google's servers and displays response times.

- <ins>**_ifconfig_**</ins> : The `ifconfig` command (short for "interface configuration") is used to configure or display information about network interfaces in Unix/Linux systems. For example, `ifconfig` shows the details of all active network interfaces, such as IP address and MAC address. Note: It is deprecated on some modern systems in favor of `ip` commands.

- <ins>**_traceroute_**</ins> : The `traceroute` command is used to map the path data takes to reach a destination by identifying all intermediate routers. For example, `traceroute google.com` displays the route packets take to reach Google's servers, including the time taken at each hop.

- <ins>**_chown_**</ins> : The `chown` command changes the ownership of a file or directory. For example, `chown user:group file.txt` assigns the ownership of `file.txt` to the specified `user` and `group`. You can use `-R` for recursive ownership changes on directories.

- <ins>**_chmod_**</ins> : The `chmod` command changes the permissions of a file or directory. For example, `chmod 755 script.sh` grants read, write, and execute permissions to the owner and read and execute permissions to others. Permissions can be modified numerically or symbolically (e.g., `chmod u+x script.sh` to add execute permission for the owner).

- <ins>**_head_**</ins> : The `head` command displays the first few lines of a file. For example, `head -n 5 file.txt` shows the first 5 lines of `file.txt`. By default, it shows the first 10 lines.

- <ins>**_tail_**</ins> : The `tail` command displays the last few lines of a file. For example, `tail -n 5 file.txt` shows the last 5 lines of `file.txt`. It’s commonly used with `-f` to follow a file’s updates in real-time.

- <ins>**_top_**</ins> : The `top` command displays a real-time overview of system processes, including CPU, memory usage, and running tasks. It’s useful for monitoring performance and resource usage.

- <ins>**_htop_**</ins> : The `htop` command is an interactive and more user-friendly version of `top`, offering better visuals and navigation for process monitoring. Use arrow keys to scroll and interact with the interface.

- <ins>**_whoami_**</ins> : The `whoami` command outputs the current username of the user executing the command. For example, running `whoami` might return `ubuntu` if logged in as that user.

- <ins>**_which_**</ins> : The `which` command locates the path of an executable. For example, `which python` might return `/usr/bin/python` if Python is installed and in the system’s PATH.

- <ins>**_hostname_**</ins> : The `hostname` command displays or sets the system’s hostname. For example, running `hostname` might return `my-server`. Use `hostnamectl` for more detailed hostname management.

- <ins>**_kill_**</ins> : The `kill` command sends signals to terminate processes. For example, `kill -9 1234` forcefully stops the process with ID `1234`. The `-9` option sends the `SIGKILL` signal, immediately terminating the process.

- <ins>**_echo_**</ins> : The `echo` command outputs text to the terminal. For example, `echo "Hello, World!"` prints `Hello, World!`. It’s also used in scripts for printing variable values.

- <ins>**_man_**</ins> : The `man` command opens the manual pages for other commands. For example, `man ls` shows detailed information about the `ls` command, including options and usage examples.
