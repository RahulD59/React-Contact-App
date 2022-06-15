import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link ,useParams,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [city,setCity]=useState("");

    
    const {id}=useParams();
    const contacts=useSelector((state)=>state);
    const selectedContact=contacts.find(contact=>contact.id===parseInt(id));

    console.log(selectedContact);
    const dispatch=useDispatch();
    console.log(contacts);

    const navigate=useNavigate();
    useEffect(()=>{
        if(selectedContact){
            setName(selectedContact.name);
            setEmail(selectedContact.email);
            setNumber(selectedContact.number);
            setCity(selectedContact.city);
        }
      
    },[selectedContact])
    
    const validation=(event)=>{
        event.preventDefault();
        const checkEmail=contacts.find(contact=>contact.id!==parseInt(id) && contact.email.toLowerCase()===email.toLowerCase() && email.toLowerCase());
        
        const checkNumber=contacts.find(contact=> contact.id!==parseInt(id) && contact.number===parseInt(number) && parseInt(number));
        
        if(!email || !name || !city || !number){
            return toast.warning("Please fill in all fields");
        }
        if(checkEmail){
            return toast.error("This email already exits")
        }
        if(checkNumber){
            return toast.error("This Number already exits")
        }

        const contactData={
            id:parseInt(id),
            name,
            email,city,number
        }
        dispatch({type:"EDIT_CONTACT",payload:contactData});
        toast.success("Data Saved Successfully");
        navigate("/");
    }

    return (
        <div className='container'>
        {
            selectedContact ? (
                <>
                <div className='row'>
        <div className='col-md-12 my-1 text-right'>
            <Link to='/' className='btn btn-outline-dark'>Go Back </Link>
        </div>
        <h3 className='display-5 text-center'>
            Edit Contact {id}
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
                <input type='submit' value='Update Contact Details'  className='btn btn-block btn-dark m-1'/>
                        <Link to="/" className='btn btn-block btn-danger m-1'>
                            Cancel
                        </Link>    
                 </div>

            </form>
               
               
            </div>
        </div> 
                </>
            ): <h1>Contact with id {id} does not exist</h1>
        }
    </div>
      )
}

export default EditContact