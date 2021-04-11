import React ,{useState,useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

export const Home = () => {
    const [users,setUsers] = useState([]);
    const [loader,setLoader] = useState(false)
    useEffect(() => {
        loadUsers();
    },[])
    const loadUsers = async () => {
        try{
            const result = await axios.get("http://localhost:3003/users");
            setUsers(result.data.reverse())
            setLoader(true)
        }catch(error){
            console.log(error)
        }
    }
    const deletUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return(
        <div className="container">
            <div className="py-5 table-responsive" >    
            {loader ?        
                <table className="table border shadow table-striped table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {users.map((user,i) => 
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td className="d-flex align-items-center justify-content-around">
                                <Link className="primary mr-2" to={`/users/edituser/${user.id}`}><EditIcon style={{ color: "green",fontSize: 20  }}/></Link>
                                <div style={{cursor:"pointer"}} className="danger" onClick={() => deletUser(user.id)} ><DeleteIcon style={{ color: "red",fontSize: 20  }}/></div>                            
                            </td>
                        </tr>
                        )}                       
                    </tbody>
                </table>
                :
                <ReactBootStrap.Spinner animation="grow" />
                }
            </div>
        </div>
    )
}