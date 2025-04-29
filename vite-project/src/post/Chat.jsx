
import React ,{useState,useEffect}from 'react';


const Resize=()=>{
    const[screesize,setscreensize]=useState({
        width: window.innerWidth,
        height: window.innerHeight,

    });
    const updatescreensize=()=>{
        setscreensize({
            width:window.innerwidth,
            height:window.innerHeight,
        })

    };

    useEffect(()=>{
        window.addEventListener('resize',updatescreensize);

        return()=>{
            window.removeEventListener('resize',updatescreensize);
        };
    },[]);

return(
    <div>
        <h1>Screen Size Example</h1>
        <p>Resize the window to see the screen size</p>
        <p style={{color:"blue"}}>Width:{screensize.width}px</p>
        <p style={{color:"blue"}}>Width:{screensize.height}px</p>
    </div>
    );
};
  

export default Resize;