import { Web3Button } from "@thirdweb-dev/react";


export default function Home() {
  const tokenId = 0;
  const quantity = 1;

  return (
     
      <div class="mint-page">
         <h1>Welcome to the Gasless NFT experience</h1>
      <Web3Button
  
        contractAddress="0xC9B76ef9f79764F2CE1e2187d6034fA7EBBAF0d2"
        action={(contract) => contract.erc1155.claim(tokenId, quantity)}
        onSuccess={() => alert("Claimed!")}
        onError={() => alert("Something went wrong")}
      >
        Claim
      </Web3Button>
      <div class="footer">Developed by Mirac.eth</div>
    </div>

  );
}