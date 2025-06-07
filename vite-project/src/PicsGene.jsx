import React, { useState } from 'react'

const SingleData=[
    {
      id: 1,
      category: 'Travel',
      title: 'Train Or Bus Journey To This One Suits?',
      excerpt: 'The choice between a train or bus journey depends on various factors, including your budget, the time you have, the comfort you seek, and the scenery you wish to enjoy.',
      imageSrc: 'https://i.postimg.cc/pThbMM9t/0ddec8c4d8d9ea0fcad8956ed83927e219693325.jpg', 
      fullContent: 'Detailed information about the train vs. bus journey...', 
    },
    {
      id: 2,
      category: 'Development',
      title: 'Best Website to research for your next project',
      excerpt: 'Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional clickthroughs from DevOps.',
      imageSrc: 'https://i.postimg.cc/FzryJN0M/168ccbf06b4420233c7be1adc58d52b0b47998ee.jpg', 
      fullContent: 'In-depth resources for website research...', 
    },
    {
      id: 3,
      category: 'Lifestyle',
      title: 'How to Be a Dancer in 2023 with proper skills?',
      excerpt: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Capitalize on low hanging fruit to identify...',
      imageSrc: 'https://i.postimg.cc/D0xqrHg8/1c9cd2d3e3be289b6ddb2e0fec5fa12f89886556.jpg', 
      fullContent: 'Steps and skills to become a dancer...',
    },
    {
      id: 4,
      category: 'Travel',
      title: 'Who is the best singer on chart? Know him?',
      excerpt: 'Chiefly Sicilian dish towel Neapolitan graded lemons divide with provincial поставщики. Entirely transition corporate platforms via cutting-edge ROI.',
      imageSrc: 'https://i.postimg.cc/CLKChMhD/9d9d68a49129979324151d8b56de9d20f24decd3.jpg', 
      fullContent: 'Information about the top singers on the charts...', 
    },
    {
      id: 5,
      category: 'Business',
      title: 'How to start export import business from home?',
      excerpt: 'Expediently drive methodologies via business catalysts for change. Globally orchestrate strategic communities vis-a-vis scalable catalysts for change. Objectively innovate empowered...',
      imageSrc: 'https://i.postimg.cc/Sx2W9Zzx/88e14abb7f697d371b85b3d74a0849a5e69b20f1.jpg', 
      fullContent: 'Guide to starting an export-import business...', 
    },
    {
      id: 6,
      category: 'Space',
      title: 'Make some drinks with chocolates, chocolates and milk',
      excerpt: 'Dramatically mesh low-risk high-yield alignments before transparent infrastructures. Quickly deploy visionary methodologies via economically sound empowerment communities.',
      imageSrc: 'https://i.postimg.cc/rwB5NSSC/d8cf16e21809a8f1653ade6e01c61a81e3ebd78b.jpg',
      fullContent: 'Delicious chocolate drink recipes...', 
    },
    {
      id: 7,
      category: 'Travel',
      title: '8 Rules Of Travelling In Sea You Need To Know',
      excerpt: 'Traveling by sea has many advantages. Some of the advantages of sea-going vessels include their massive size, large cargo capacity, all-weather travel, and lower costs.',
      imageSrc: 'https://i.postimg.cc/sXyStsHM/25cde17084e062ac7b879794b198658bf66f560d.jpg', 
      fullContent: 'Essential rules for sea travel...', 
    },
    {
      id: 8,
      category: 'Lifestyle',
      title: 'How to build strong portfolio and get a Job in UI/Ux',
      excerpt: 'Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional clickthroughs from DevOps.',
      imageSrc: 'https://i.postimg.cc/L8115nrq/9e51a6dd80dd66784b9dc4730451173e6f957803.jpg',
      fullContent: 'Steps to build a strong UI/UX portfolio...', 
    },
    {
      id: 9,
      category: 'Football',
      title: 'How to Be a Professional Footballer in 2023',
      excerpt: 'Energistically drive revolutionary convergence via impactful initiatives. Distinctively exploit optimal alignments for intuitive bandwidth. Professionally fashion wireless leadership rather than...',
      imageSrc: 'https://i.postimg.cc/k4zDQpGn/6030fc523975f62e5f47d714ddad5a85ad44f110-1.jpg', 
      fullContent: 'Guide to becoming a professional footballer...', 
    },
  ];
function Pics({blog}){
    const[Change,SetChange]=useState(false);

    const Handle=()=>{
      SetChange(true)
  
    }
    return(
        <div>
            <img src={blog.imageSrc}/>
            <div>
            <span>{blog.category}</span>
            <span>{blog.title}</span>
            <span>{blog.excerpt}</span>
            </div>
            {!Change&&(<button onClick={Handle}>Read more</button>)}
            {Change&& <div>{blog.fullContent}</div>}
        </div>
    )
}

function PicsGene() {

  return (
    <div>
        {SingleData.map((value)=>(
            <Pics  blog={value}/>
        ))}

    </div>
  )
}

export default PicsGene