import { Container, Grid, Typography } from "@mui/material";
import News from "../components/News";

export default function Home() {

    return(
        <Container>
            <Grid bgcolor={"#62462c"} padding={"20px"} borderRadius={"10px"} >
                <Grid item bgcolor={"#694929"} padding={"3px"} margin={"1px"} borderRadius={"10px"}>
                <h1>HomePage</h1>
                </Grid>
                <Grid item bgcolor={"#694929"} padding={"3px"} margin={"1px"} borderRadius={"10px"}>
                    <Typography>
                    Üdvözöllek!
                    <br/>
                    Hihetetlen szuper dolgok várnak rád!
                    </Typography>
                </Grid>
                <Grid item>
                    <News />
                </Grid>
                <Grid item>
                    <News />
                </Grid>
                <Grid item>
                    <News />
                </Grid>
            </Grid>  
         </Container>
    )
}