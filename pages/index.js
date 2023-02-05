import { ThirdwebProvider, useStorageUpload,MediaRenderer } from "@thirdweb-dev/react"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai"


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
        <div class="footer"> <a class="twitter" href="https://twitter.com/7310DOTeth?s=20&t=KD8pTRRzL9s7wDdy2b7sHw"> <AiFillTwitterCircle size={35}/></a>Developed by Mirac.eth</div>
    </div>
    
  )
}