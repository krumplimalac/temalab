
import { Grid, Typography } from '@mui/material';
import MyCard  from '../components/MyCard';
import { useState } from 'react';

{/*let nextId = 0;
const [foods,setFoodData] = useState([])
foods.push({
    id: nextId++,
    name: "Bundás",
});
foods.push({
    id: nextId++,
    name: "Szendó",
});
foods.push({
    id: nextId++,
    name: "Pizza",
});*/}

export default function Menu(){
    return(
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MyCard  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MyCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MyCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MyCard />
                </Grid>
            </Grid>
           
        </div>
    )
}