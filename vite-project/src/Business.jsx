import React, { useState } from 'react'
import './business.css'

function Selector(){
    const[Number,Setnumber]=useState("Franchise");

    const Change=(event)=>{
        Setnumber(event.target.value);

    };
    const Forms=()=>{
        switch(Number){
            case 'Franchise':
            return(
                <div className='form1 '>
                <form>
                    <div className='form1-container'>
                        <div className='form'>
                        <label className='form1-label' htmlFor="name2">
                        <span className='required'>*</span> Name :</label>
                        <input className='form1-input' type="text" id="name2"placeholder='Enter your name' />
                        </div>
                        <div className='form'>
                        <label className='form1-label' htmlFor="Add2"><span className='required'>*</span>Address :</label>
                        <input className='form1-input'  type="text" id="Add2" placeholder='Enter your address'/>
                        </div>
                        <div className='form'>
                        <label className='form1-label' htmlFor="Gst2"><span className='required'>*</span>GST :</label>
                        <input className='form1-input'  type="text" id="Gst2" placeholder='Enter GST number'/>
                        </div>
                        <div className='form'>
                        <label className='form1-label' htmlFor="cost2"><span className='required'>*</span>Cost :</label>
                        <input className='form1-input'  type="text" id="cost2" placeholder='Enter price'/>
                        </div>
                        <div className='form'>
                        <label className='form1-label' htmlFor="Area2"><span className='required'>*</span>Area of the Franchise :</label>
                        <select className='form1-input' id="Area2">
                            <option >Select Franchise Location</option>
                            <option >Hyderabad</option>
                            <option >Bangalore</option>
                            <option >Mumbai</option>
                            <option >Chennai</option>
                            <option >Kerala</option>
                            <option >Delhi</option>
                            </select>
                        </div>
                        <div className='Total-button2'><button className='button2'>Save & Post</button></div>

                    </div>
                </form>

            </div>

            );
            case 'Business':
                return(
                    <div className='form1 '>
                    <form>
                        <div className='form1-container'>
                            <div className='form'>
                            <label className='form1-label' htmlFor="name2"><span className='required'>*</span>Name :</label>
                            <input className='form1-input' type="text" id="name2"placeholder='Enter your name' />
                            </div>
                            <div className='form'>
                            <label className='form1-label' htmlFor="Add2"><span className='required'>*</span>Address :</label>
                            <input className='form1-input'  type="text" id="Add2" placeholder='Enter your address'/>
                            </div>
                            <div className='form'>
                            <label className='form1-label' htmlFor="Gst2"><span className='required'>*</span>GST :</label>
                            <input className='form1-input'  type="text" id="Gst2" placeholder='Enter GST number'/>
                            </div>
                            <div className='form'>
                            <label className='form1-label' htmlFor="cost2"><span className='required'>*</span>Cost :</label>
                            <input className='form1-input'  type="text" id="cost2" placeholder='Enter price'/>
                            </div>
                            <div className='form'>
                            <label className='form1-label' htmlFor="Area2"><span className='required'>*</span>Area of the Business :</label>
                            <select className='form1-input' id="Area2">
                            <option >Select Business Location</option>
                            <option >Hyderabad</option>
                            <option >Bangalore</option>
                            <option >Mumbai</option>
                            <option >Chennai</option>
                            <option >Kerala</option>
                            <option >Delhi</option>
                            </select>
                            </div>
                            <div className='Total-button2'><button className='button2'>Save & Post</button></div>
    
                        </div>
                    </form>
    
                </div>
    
                );
                default:
                    return null;
            
        }
    };


  return (
    <div className='total'>
        <div className='Heading '><h1 className='post'>Post :</h1></div>
        <div className='Radios'>
            <div className='radios-franchise'>
        <input type="radio" value="Franchise" id="form1" onChange={Change} checked={Number=='Franchise'}/>
        <label className='franchise-label ' htmlFor='form1'>Franchise</label></div>
        <div className='radios-business'>
        <input type="radio" value="Business" id="form2" onChange={Change} checked={Number=='Business'}/>
        <label className='business-label ' htmlFor='form2' >Business</label>
        </div>
        </div>

        <div>{Forms()}</div>



    </div>
  );
}


export default Selector