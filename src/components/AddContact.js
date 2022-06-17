import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
const AddContact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [city,setCity]=useState("");
    
    const contacts=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(contacts);

    const navigate=useNavigate();

    const validation=(event)=>{
        event.preventDefault();
        const checkEmail=contacts.find(contact=>contact.email.toLowerCase()===email.toLowerCase() && email.toLowerCase());
        
        const checkNumber=contacts.find(contact=> contact.number===parseInt(number) && parseInt(number));
        
        
        if(!email || !name || !city || !number){
            return toast.warning("Please fill all fields");
        }
        if(number.length!==10){
            return toast.warning("Please please enter valid Number");
        }
        if(checkEmail){
            return toast.error("This email already exits")
        }
        if(checkNumber){
            return toast.error("This Number already exits")
        }

        const contactData={
            id:contacts.length+1,
            name,
            email,city,number
        }
        dispatch({type:"ADD_CONTACT",payload:contactData});
        toast.success("Data Saved Successfully");
        navigate("/");
    }
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-12 my-1 text-right'>
        <Link to='/' className='btn btn-outline-dark'>Go Back </Link>
    </div>
    <h3 className='display-5 text-center'>
        Add Contact
    </h3>
        <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit={validation}>
                <div className='form-group'>
                    <input type='text' placeholder='Name' className='form-control m-1'
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className='form-group'> 
                    <input type='email' placeholder='Email'  className='form-control m-1'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input type='number' placeholder='Phone'  className='form-control m-1'
                     value={number}
                     onChange={e=>setNumber(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='City'  className='form-control m-1'
                    value={city}
                    onChange={e=>setCity(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Add Contact Details'  className='btn btn-block btn-dark m-1'/>
                </div>

            </form>
           
        </div>
    </div>  
</div>
  )
}

export default AddContact