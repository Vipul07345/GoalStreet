import React from 'react'
import "./Message.css"

function Message() {
  return (
    <div className='message-total'>
        
        
        <div className='message-totalbutton'>
        <div className='message-topbar'><h4 className='message-topfont'>Send a quick reply in one click</h4> </div>
        <div className='message-singlebutton'><button className='message-innerbutton'>Price 2 Price?</button></div>
        <div className='message-singlebutton'><button className='message-innerbutton'>Hi Rakesh</button></div>
        <div className='message-singlebutton'><button className='message-innerbutton'>Send product photos?</button></div>
        <div className='message-singlebutton'><button className='message-innerbutton'>Is product available</button></div>
</div>
<div className='Total-messagebar'>
    <img className='message-img' src='https://i.postimg.cc/TYFnxrsY/images-2.jpg'/>
    <div className='message-sidebar'>
    <div className='message-font'>I am intrested in Multy Bandhani Printed Saree,Moss Chunary,6.30 Mtr With Blouse</div>
    <p className='message-font'>Quality: 2 piece</p>
    <div className='message-font'>Silk</div>
    </div>
</div>

    </div>
  )
}

export default Message