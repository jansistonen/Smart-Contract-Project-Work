# Smart-Contract-Project-Work
Project work for "Introduction to Blockchain" -course

Repo includes all the source code of the working project, except the node_modules.

Step-by-step instructions how to run the project:

1) Have a Visual Studio Code (or other IDE) and Node.js installed

2) Download project from GitHub:
  - Click "Code" and Download ZIP
  - Extract the file to your computer

3) Open the project folder in your editor (VS Code)
4) Open terminal and install all the depencies:
   - After opening the folder in editor (VS Code recommended) open the terminal window
   - run "npm install" (without heittomerkit)
   - this command installs all the depencies, includin react and ethers.js
   - if you get an error with this command, make sure you are running the terminal as a admin
   - you can make sure of this by running the command "sudo npm install"

5) Run the project locally
   - use command "npm run dev" ( "sudo npm run dev" if needed)
   - now the User Interface should be up and running

6) Install and connect Metamask
   - download Browser extension from https://metamask.io/
   - Create a wallet
   - connect the wallet to test network (Sepolia)
   - Get test money from a faucet to your account https://cloud.google.com/application/web3/faucet/ethereum/sepolia

7) Type the contract address to the UI
   - we have made TWO working contracts for this project with Remix IDE
   - 0x8729191b555335728B046684a335F2DE62C974f5 or
     0x5DF261361238ba7be05268A5b7851e1617D9E531
   - Click "Get message" to fetch previous message in blockchain or
   - "Set Message" to send a new one
   - Accept the message with Metamask wallet (you do need the test money for this step)
