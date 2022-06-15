import React from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {Link ,useNavigate} from 'react-router-dom';
const Home = () => {
    const contacts=useSelector((state)=>state);
 
    console.log(contacts);
    const dispatch=useDispatch();
    console.log(contacts);

    const navigate=useNavigate();
    const DeleteContact=(id)=>{
       let data=contacts.filter(contact=>contact.id!==id);
        dispatch({type:"DELETE_CONTACT",payload:data});
    }
  return (
    <div className='container'>
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
                                    onClick={e=>DeleteContact(contact.id)}
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

export default Home