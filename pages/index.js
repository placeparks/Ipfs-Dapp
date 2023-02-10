import { ThirdwebProvider, useStorageUpload,MediaRenderer } from "@thirdweb-dev/react"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import Image from 'next/images'

export default function Component() {
  const [uris,setUris] = useState([]);
  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(
    async acceptedFiles => {
      const _uris = await upload({ data: acceptedFiles })
      setUris(_uris);
      
    },
    [upload]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  console.log(uris);

  return (

    <div>
 <a class="home" href="https://sign-in-b4xz.vercel.app/">Home</a><hr/>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button class="btn">
  <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Upload to Ipfs</span>
</button>
     
    </div>
    <div class="para">
          
           
           <h1> IPFS CID : {uris}</h1>
           <a
              href={`https://gateway.ipfscdn.io/${uris}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              See current user file
            </a>
        </div>
            <div class="imp">if file does not open remove (:/) after ipfs in browser's address bar <span> &#8594;</span> 'https://gateway.ipfscdn.io/ipfs/QmX....'  </div>
            <div class="footer"> <a class="twitter" target="_blank" href="http://twitter.com/_73100" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a><a target="_blank" href="https://bio.link/099" rel="noreferrer"><Image src="/mail.png" height={22} width={20} alt="contact"/></a>
Developed by Mirac.eth</div>
    </div>
    
  )
}
