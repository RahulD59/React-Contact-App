import React, { useState } from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
const Home = () => {
    const contacts=useSelector((state)=>state);
    const [isOpen,setOpen]=useState(false);
    const [deleteId,setDeleteID]=useState();

    const dispatch=useDispatch();
    const openModal=(id)=>{
        setOpen(true);
        setDeleteID(id);
       
        
    }
    const DeleteContact=(id)=>{
       
       let data=contacts.filter(contact=>contact.id!==id);
        dispatch({type:"DELETE_CONTACT",payload:data});
        setOpen(false);
    }
    const closeBox=()=>{
        setOpen(false);
    }
  return (
    
    <div className='container'>
       {isOpen ?  <ReactDialogBox
              closeBox={closeBox}
              modalWidth='60%'
              headerBackgroundColor='#212529'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='auto'
              headerText='Are you Sure you want to Delete this item?'
            >
               <button type='button' className='btn btn-small btn-danger'
                                    onClick={e=>DeleteContact(deleteId)}
                                    >Yes</button>
                                    &nbsp;
                                    <button type='button' className='btn btn-small btn-primary'
                                    onClick={e=>closeBox()}
                                    >Close</button>
            </ReactDialogBox> : null}
        <div className='row'>
        <div className='col-md-12 my-5 text-right'>
            <Link to='/create' className='btn btn-outline-dark'>Add Contact </Link>
        </div>
            <div className='col-md-12 mx-auto'>
                <table className='table table-hover'>
                    <thead className='text-white bg-dark text-left'>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>City</th>
                        <th>Action</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {contacts.map((contact,id)=>(
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.number}</td>
                                <td>{contact.city}</td>
                                <td>
                                    <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary'>
                                        Edit</Link> &nbsp;
                                    <button type='button' className='btn btn-small btn-danger'
                                    onClick={e=>openModal(contact.id)}
                                    >
                                        Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  
    </div>
  )
}

export default Home;