import axios from 'axios';
import React,{useState} from 'react';
import {useHistory}  from 'react-router-dom';

export const AddUser = () => {
    let history = useHistory();
    const[user,setUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    })
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:3003/users', user)
        history.push('/')
    }
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    return(
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-md-5 p-3">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={user.name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="email"
                        value={user.email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Address"
                        name="address"
                        value={user.address}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={user.phone}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button style={{backgroundColor:"#414042",color:"#fff"}} className="btn btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}