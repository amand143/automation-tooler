'use client'
import * as LR from '@uploadcare/blocks';
import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css"
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

LR.registerBlocks(LR);
type Props = {
    onUpload: (e: string) => any
}

const UploadCareButton = ({onUpload} : Props)=> {
    const router = useRouter()
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype>(null);

  useEffect(() => {
    const handleUplaod = async(e:any) =>{
        const file = await onUpload(e.detail.cdnUrl)
        if(file){
            router.refresh()
        }
        else{
          console.log("file where")
        }
    }   
    ctxProviderRef.current.addEventListener('file-upload-success', handleUplaod);
  }, []);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="fc012b7f310a487de45d"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  );
}

export default UploadCareButton;