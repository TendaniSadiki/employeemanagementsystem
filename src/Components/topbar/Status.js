import OnlineNav from "./OnlineNav";
import OfflineNav from "./OfflineNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'


const Status = () =>{
    const [loginState, setLoginState] = useState(false)
   
        return(
            <Router>
                {
                    loginState ?
                    <Routes>
                    <Route exact path="*" element={<OnlineNav/>}/>
                    </Routes>
                :
                    <Routes>
                        <Route exact path="*" element={<OfflineNav/>}/> 
                    </Routes>
    }
            </Router>
        )
    }
    
    export default Status;