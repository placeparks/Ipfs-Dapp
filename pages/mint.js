import { Web3Button } from "@thirdweb-dev/react";
import Image from 'next/image'

export default function Home() {
  const tokenId = 0;
  const quantity = 1;

  return (
<div class="mint-page">
     <nav class="nav-mint"><a class="home-mint" href="https://sign-in-b4xz.vercel.app/">Home</a></nav>
         <h1>Welcome to the Gasless NFT experience</h1>
      <Web3Button
  
        contractAddress="0xC9B76ef9f79764F2CE1e2187d6034fA7EBBAF0d2"
        action={(contract) => contract.erc1155.claim(tokenId, quantity)}
        onSuccess={() => alert("Claimed!")}
        onError={() => alert("Something went wrong")}
      >
        Claim
      </Web3Button>
      <div class="footer"><a target="_blank" href="https://bio.link/099" rel="noreferrer"><Image src="/mail.png" height={22} width={20} alt="contact"/></a>
Developed by Mirac.eth</div>
    </div>
  );
}
