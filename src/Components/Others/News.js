
import { NotionRenderer } from 'react-notion'
import { useEffect, useState } from 'react'
import "react-notion/src/styles.css"


function News(){
    const[response ,setResponse] = useState({});

useEffect(()=>{
    // const NOTION_PAGE_ID = 'AROUND-c7bd450933c54bcf8a2ea65dc05cb8cf';

    fetch('https://notion-api.splitbee.io/v1/page/A_FACT-a2beadd9f606433ba0a22715c07e9596')
    .then(res=>res.json())
    .then((resJson)=>{
        setResponse(resJson);
    });
},[])

    return(
    <div>  
        <NotionRenderer 
            blockMap={response}
            fullPage={false}
            darkMode={false}
            scroll={true}/>
    </div>
  );
}

export default News;