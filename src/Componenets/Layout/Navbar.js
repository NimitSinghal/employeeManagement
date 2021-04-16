import React from 'react';
import logo from "../../assets/images/logo.png";
import {Link} from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#F1A400",padding:"20px"}}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-end w-100">
                    <Link className="d-flex align-items-center" to="/users/addusers" style={{textDecoration:"none",color:"white",border:"1px solid white",borderRadius:"3px",padding:"8px 20px"}}>
                        <PersonAddIcon className="d-none d-md-block" style={{ paddingRight:"5px" }}/>Add User
                    </Link>
                </div>      
            </div>
        </nav>
    )
}