import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";




const Home = () => {
    const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   
  `;
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id : 0,
        last_name: "",
    });


 
    useEffect(()=> {
        axios
        .get(`https://reqres.in/api/users?page=1&per_page=9`)
        .then((res) => {
            setUserInfo(res.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <> 
            <h1>Home Page</h1>
            <Container>
                {userInfo.map((user)=>(
                   < Card
                    key={user.id}
                    img={user.avatar}
                    name={`${user.first_name} ${user.last_name}`}
                    id={user.id}
                    email={user.email}
                    />
                )
                )}
            </Container>
           
            <Link to="/menu">메뉴 페이지로 이동</Link>
        </>
    );
};

export default Home;

