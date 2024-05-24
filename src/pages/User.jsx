
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import styled from "styled-components";



const User = () => {
    
    
    const {userId} = useParams();
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id : 0,
        last_name: "",
    });
    
    useEffect(()=> {
        axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            setUserInfo(res.data.data);
            
        })
        .catch((e) => {
            console.log(e);
        });
    }, []);

    
        
        return(
          <>
          <h1>User Information</h1>
         
            <img src={userInfo.avatar} alt= {`${userInfo.first_name} ${userInfo.last_name}`}/>
            
            
            <h3>
                {`${userInfo.first_name} ${userInfo.last_name}`}
            </h3>
            <p>email : {userInfo.email}</p>
           
            </>
        );
};

export default User;