import React from 'react'
import {NavLink} from 'react-router-dom';
import './LoginStyle.css';

const Login = () =>{
    function signin(){
        var logmail=localStorage.getItem('mail');
        var lopw=localStorage.getItem('Password');
        var maibox=document.getElementById('email').value;
        var passbox=document.getElementById('pwd').value;
        var location = '';
    
        if(maibox == logmail &&passbox==lopw){
            alert("Your Email & Password correct") ;
            window.open("home.html");
        }
        else if(maibox !=passbox &&passbox != lopw ){
          alert("Wrong Email or Password");
        }
        else if(maibox==''&&passbox==''){
            alert("Your Email & Password empty");
        }
        else{
            alert("Welcome " +localStorage.getItem('userName'));
    window.open("home.html");}
       
      
           }
    
    return(
        <div>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
            <p>Login page</p>
            <div className="container">
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
  <input type="text" className="form-control" placeholder="Username" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" />
</div>
 <button type="button" className="btn btn-secondary btn-block">Log In</button>
 <div className="message">

 </div>
 <NavLink to="../SIGNUP  "  exact ><span><i>Sign Up</i></span>
                    </NavLink>  
   </form>  
          </div>
        </div>
       </div>   
      
            
        </div>
    )
}

export default Login;