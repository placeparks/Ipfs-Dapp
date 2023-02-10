import { ThirdwebProvider, useStorageUpload,MediaRenderer } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from 'next/image';

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
 <a className="home" href="https://sign-in-b4xz.vercel.app/">Home</a><hr/>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="btn">
  <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Upload to Ipfs</span>
</button>
     
    </div>
    <div className="para">
          
           
           <h1> IPFS CID : {uris}</h1>
           <a
              href={`https://gateway.ipfscdn.io/${uris}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              See current user file
            </a>
        </div>
            <div className="imp">if file does not open remove (:/) after ipfs in browser's address bar <span> &#8594;</span> 'https://gateway.ipfscdn.io/ipfs/QmX....'  </div>
            <div className="footer"><a target="_blank" href="https://bio.link/099" rel="noreferrer"><Image src="/mail.png" height={22} width={20} alt="contact"/></a>
Developed by Mirac.eth</div>
    </div>
    
  )
}
