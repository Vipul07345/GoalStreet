import React from 'react'
import './Post.css'

function Total({totalimage}){
  {
    return totalimage.map((value,index)=>{
    return(
      <div key={index} className='Total'>
        <img src={value.image} className='images'/>
      <p className='message'>{value.message}
      </p>
      </div>

    )

  })}

}


function Post() {
  const images=[
    {
    image : "https://i.postimg.cc/fLGYcLdw/images-14.jpg",
    message:"The willow weeps soft tears on the still, clear pond, Where sunlight dances low, and the breezes respond."
    },
    {
      image:"https://i.postimg.cc/G3MCmykw/images-13.jpg",
      message:"A symphony of chirps from the emerald canopy rings,As butterflies with painted wings take flight on playful springs."
    },
    {
      image:"https://i.postimg.cc/vTTCV0WR/images-12.jpg",
      message:"Beneath the ancient oaks, where twilight starts to creep,The forest floor lies hushed, holding secrets buried deep."
    },
    {
      image:"https://i.postimg.cc/q7GFDPwV/images-11.jpg",
      message:"The jagged peaks stand tall against the stormy, grey domain,While crashing waves below unleash their wild, relentless rain."
    },
    {
      image:"https://i.postimg.cc/m2F5WzjS/download-8.jpg",
      message:"The golden grasslands stretch beneath the boundless azure sky,Where silent hawks in graceful paths effortlessly drift and fly."
    },
    {
      image:"https://i.postimg.cc/y8mpWMwg/download-7.jpg",
      message:"A single dewdrop clings to a spider's silken thread,Reflecting tiny blooms in a crystal tear it shed."
    },
  
  ]
  return (
    <div className='post'>
      <Total totalimage={images}/>
      

        </div>
  )
}

export default Post