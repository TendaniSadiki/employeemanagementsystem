import { useState } from "react";
import "./home.css";

export default function Home(){
    const [users, setUsers]= useState(JSON.parse(localStorage.getItem("users")));
    return(
        <div className="page">
        <br></br>
        <br></br>
        <br></br>
            <h1>
            Lobby
            </h1>
            <div id="friends">
                <br></br>
                <h3>Dashboard</h3>
                
                <ul>
                    {users.map((user,index)=>{
                        return( 
                        <li>
                            <div>
                                <span> Name: {user.name} </span>
                                <span> Surname: {user.surname} </span>
                                <span> Email: {user.email}</span>
                                <span> Contact number: {user.number} </span>
                                <span> Time: {user.time} </span>
                            </div>
                        </li>)
                        
                    })}
                   
                   
                    
                </ul>
                
            </div>
        </div>
    );
}