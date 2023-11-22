import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export default function MyCard() {
    return(
        <Box maxwidth='340px' margin='5px' paddingBottom='5px'>
            <Card>
                <CardMedia 
                    component = 'img'
                    height='180'
                    image="https://media.tenor.com/JiNfNwrkjtEAAAAC/cat-funny.gif"
                    />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Pizza   
                    </Typography>
                    <Typography variant='body2' color='inherit'>
                            Jó
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>MORE</Button>
                </CardActions>
            </Card>
        </Box>
    )
}