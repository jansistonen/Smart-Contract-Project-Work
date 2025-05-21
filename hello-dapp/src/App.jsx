import { useEffect, useState } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { CONTRACT_ABI } from './contract';

function App() {
  const [contractAddress, setContractAddress] = useState('');
  const [contract, setContract] = useState(null);
  const [network, setNetwork] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [status, setStatus] = useState('');

  // Tarkista osoitteen muoto
  const isValidAddress = (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr);

   // Ladataan wallet address ja network heti kun sovellus avautuu
  useEffect(() => {
    const loadWalletAndNetwork = async () => {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const network = await provider.getNetwork();

        setWalletAddress(await signer.getAddress());
        setNetwork(network);
      } catch (error) {
        console.error("Error loading wallet/network:", error);
        setStatus('Failed to load wallet/network');
    }
  };
  loadWalletAndNetwork();
}, []);

  // Luo sopimus-olio kun osoite vaihtuu
  useEffect(() => {
    const setupContract = async () => {
      if (!isValidAddress(contractAddress) || !window.ethereum) {
        setContract(null);
        return;
      }
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const instance = new Contract(contractAddress, CONTRACT_ABI, signer);
        setContract(instance);
        setStatus('Contract loaded');
        
      } catch (error) {
        console.error("Error creating contract:", error);
        setStatus('Failed to connect to contract');
      }
    };
    setupContract();
  }, [contractAddress]);

  const getMessage = async () => {
    if (!contract) return;
    try {
      const message = await contract.getMessage();
      setCurrentMessage(message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setStatus("Failed to get message");
    }
  };

  const setMessage = async () => {
    if (!contract || !newMessage) return;
    try {
      setStatus("Requesting wallet access...");
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const tx = await contract.setMessage(newMessage);
      setStatus("Waiting for confirmation...");
      await tx.wait();
      setStatus("Message updated!");
      getMessage();
    } catch (error) {
      console.error("Transaction failed:", error);
      setStatus("Transaction failed: " + (error?.message || "Unknown error"));
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1>Hello dApp</h1>

      {network?.name ? (
          <p><strong>Network: </strong> {network.name}</p>
      ) : (
          <p><strong>Network: </strong> Unidentified</p>
      )}

      {walletAddress ? (
          <p><strong>Connected Wallet:</strong> {walletAddress}</p>
      ) : (
          <p><strong>Connected Wallet:</strong> MetaMask wallet not found</p>
      )}
      <p><strong>Current message:</strong> {currentMessage}</p>

      <label>Smart Contract Address:</label>
      <input
        type="text"
        placeholder="0x..."
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <button onClick={getMessage} disabled={!contract}>Get Message</button>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write your message"
        style={{ padding: '0.5rem', width: '100%', marginTop: '1rem' }}
      />
      <button onClick={setMessage} disabled={!contract || !newMessage} style={{ marginTop: '0.5rem' }}>
        Send Message
      </button>

      <p>{status}</p>
    </div>
  );
}

export default App;
