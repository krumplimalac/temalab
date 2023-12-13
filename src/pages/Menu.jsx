import { Container, Grid, Typography } from '@mui/material';
import MyCard  from '../components/MyCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Menu(){

    const [menu, setMenu] = useState([]);
     
    const client = axios.create({
   baseURL: '/api/MenuItems' 
});

useEffect(() => {
    const fetchMenu = async () => {
        let response = await client.get();
        setMenu(response.data);
    };
    fetchMenu();
 }, []);

 /*useEffect(() => {
    const fetchMenu = async () => {
       const response = await fetch(
          'api/MenuItems'
       );
       const data = await response.json();
       console.log(data);
       setMenu(data);
    };
    fetchMenu();
 }, []);*/
 
    return(
        <Container>
             <MyCard  items={menu} />
       </Container>
    )
}