import { Card, Box, Typography, CardContent, CardMedia, CardActions, Button } from "@mui/material";

export default function News(){
    return(
        <Box maxwidth='340px' margin='5px' paddingBottom='5px' >
            <Card elevation={3} sx={{borderRadius: '10px'}}>
                
                <CardContent >
                    <Typography gutterBottom variant='h5' component='div'>
                        Hír!   
                    </Typography>
                    <Typography variant='body2' color='inherit'>
                            Mai, hírünk: nyitva vagyunk!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Olvass többet</Button>
                </CardActions>
            </Card>
        </Box>
    )
}