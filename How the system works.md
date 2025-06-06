Step-by-step:


1) Initialization
  - User opens the React web page

  - UI asks the user for a smart contract address

  - UI connects to that smart contract using ethers.js

2) Reading a Message
  - User clicks "Get Message"

  - UI calls contract.getMessage() through ethers.js

  - The message is read from the blockchain (no gas cost)

  - UI displays the message

3) Writing a New Message
  - User types a message and clicks "Send Message"

  - UI calls contract.setMessage("new text")

  - Metamask pops up → user approves the transaction

  - The transaction is sent to the blockchain:

  - Test ETH is used to pay gas

  - Network processes and stores the new message

  - After confirmation, UI reads and shows the updated message

4) Behind the Scenes
  - ethers.js connects the UI to the Ethereum network

  - The smart contract is immutable once deployed

  - Every write operation is a transaction → requires signing and gas

  - Every read operation is a view call → no gas, instant


ETHERSCAN

From Etherscan it is possible to view the transactions and verify that the new block has actually been created correctly
This is direct link to our contract's transactions: https://sepolia.etherscan.io/address/0x8729191b555335728B046684a335F2DE62C974f5

From Etherscan it is also possible to see which wallets have been using our contract
