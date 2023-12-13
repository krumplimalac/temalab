import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia, Container} from '@mui/material'

export default function MyCard({items}) {

    const List = items.map((item) =>
            <Box maxwidth='140px' margin='5px' paddingBottom='5px'>
                <Card type='card'>
                    <CardMedia 
                        component = 'img'
                        height='280'
                        image={item.img}
                        />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {item.name}   
                        </Typography>
                        <Typography variant='body2' color='inherit'>
                                {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>MORE</Button>
                    </CardActions>
                </Card>
            </Box>
        
    );

    return(
        
            <Container>
                {List}
            </Container>
       
        )}