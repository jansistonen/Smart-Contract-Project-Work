# Smart-Contract-Project-Work
Project work for "Introduction to Blockchain" -course

![image](https://github.com/user-attachments/assets/54e1665d-c38a-4c56-a6c7-0a1bc2747bc9)


Repo includes all the source code of the working project, except the node_modules.

Step-by-step instructions how to run the project:

1) Have a Visual Studio Code (or other IDE) and Node.js installed

2) Download project from GitHub:
![image](https://github.com/user-attachments/assets/ad2c3bf9-e680-4b12-8cdd-68ef2b87c72a)

  - Click "Code" and Download ZIP
  - Extract the file to your computer

3) Open the project folder in your editor (VS Code)
![image](https://github.com/user-attachments/assets/547e2528-e517-4027-816a-dfd764faac3c)
![image](https://github.com/user-attachments/assets/02c00a7c-bcdb-4f20-88c2-ecdc4cbd0791)

4) Open terminal and install all the depencies:
   - After opening the folder in editor (VS Code recommended) open the terminal window
![image](https://github.com/user-attachments/assets/ffa20bd3-fec1-4123-b2ab-3e97c6d8f712)

   - run "npm install" (without heittomerkit)
![image](https://github.com/user-attachments/assets/3374b115-9f64-4991-acd9-3e215490d937)

   - this command installs all the depencies, includin react and ethers.js
   - if you get an error with this command, make sure you are running the terminal as a admin
   - you can make sure of this by running the command "sudo npm install"

5) Run the project locally
![image](https://github.com/user-attachments/assets/7cf0101c-573e-40a5-a46d-1af754b25429)

   - use command "npm run dev" ( "sudo npm run dev" if needed)
   - now the User Interface should be up and running

6) Install and connect Metamask
   - download Browser extension from https://metamask.io/

<img src="https://github.com/user-attachments/assets/c987a8cd-410c-4869-8e38-94f8047cd7b1" alt="Alt Text" style="width:50%; height:auto;">

   - Create a wallet
     

<img src="https://github.com/user-attachments/assets/22b48141-cbf6-4be7-9ed3-f7690d161888" alt="Alt Text" style="width:50%; height:auto;">


<img src="https://github.com/user-attachments/assets/217a278f-6023-418b-9dff-db626963e38d" alt="Alt Text" style="width:50%; height:auto;">
  
   - connect the wallet to test network (Sepolia)


![image](https://github.com/user-attachments/assets/922a03f0-e601-4618-860e-441db675b4bf)

   - Get test money from a faucet to your account https://cloud.google.com/application/web3/faucet/ethereum/sepolia

7) Type the contract address to the UI
   - we have made TWO working contracts for this project with Remix IDE
   - 0x8729191b555335728B046684a335F2DE62C974f5 or
     0x5DF261361238ba7be05268A5b7851e1617D9E531
   - Click "Get message" to fetch previous message in blockchain or
   - "Set Message" to send a new one
   - Accept the message with Metamask wallet (you do need the test money for this step)
