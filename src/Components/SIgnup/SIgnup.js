import React from 'react'
import {NavLink} from 'react-router-dom';

const Signup = () =>{

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Signup page</p> <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="name" className="form-control" placeholder="Name" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Surname" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="email" className="form-control" placeholder="Email" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="tel" className="form-control" placeholder="Contact number" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user">Image</i></span>
  </div>
  <input type="file" className="form-control" placeholder="Username" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" />
</div>
 <button type="button" className="btn btn-secondary btn-block">Sign Up</button>
 <div className="message">

 </div>
 <NavLink to="../Login"  exact ><span><i>Sign In</i></span>
                    </NavLink>
   </form>  
          </div>
        </div>
       </div>   
         
        </div>
    )
}

export default Signup;