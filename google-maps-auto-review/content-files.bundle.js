(()=>{"use strict";const e=e=>new Promise((t=>setTimeout(t,e))),t=async(t,{root:n=document,timeout:o=3e4,interval:a=100}={})=>await(async(t,{timeout:n=3e4,interval:o=100}={})=>{const a=0===n?1/0:Date.now()+n;do{try{const e=t();if(null!==e)return e}catch(e){console.error(e)}await e(o)}while(Date.now()<a);throw new Error(`timeout ${n} expired`)})((()=>("function"==typeof n?n():n).querySelector(t)??null),{timeout:o,interval:a});(async()=>{console.log("requesting files");const{images:n}=await((e,...t)=>new Promise(((n,o)=>{chrome.runtime.sendMessage({type:e,args:t},(({result:e,error:t})=>{t?o(new Error(t)):n(e)}))})))("requestData");console.log("adding files");const o=new DataTransfer;for(const{name:e,mime:t,bytes:a}of n){const n=new File([new Uint8Array(a).buffer],e,{type:t});o.items.add(n)}console.log("uploading");const a=await t("#\\:i\\.select-files-button>*");await new Promise((e=>{setTimeout((()=>{a.click(),e()}),1)}));const i=await t('input[type="file"]');i.files=o.files,i.dispatchEvent(new InputEvent("change")),console.log("sending"),await e(250),(await t('#picker\\:ap\\:0[aria-disabled="false"]')).dispatchEvent(new MouseEvent("mousedown")),await e(250),(await t('#picker\\:ap\\:0[aria-disabled="false"]')).dispatchEvent(new MouseEvent("mouseup")),console.log("sent")})()})();