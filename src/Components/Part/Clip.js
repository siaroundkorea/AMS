
import { NotionRenderer } from 'react-notion'
import { useEffect, useState } from 'react'
import "react-notion/src/styles.css"


function Clip(){
    const[response ,setResponse] = useState({});

useEffect(()=>{

    fetch('https://notion-api.splitbee.io/v1/page/38cad94ae88249edafb477bd78bf9529')
    .then(res=>res.json())
    .then((resJson)=>{
        setResponse(resJson);
    });
},[])

    return(
    <>
        <NotionRenderer
            blockMap={response}
            fullPage={false}/>
    </>
  );
}

export default Clip