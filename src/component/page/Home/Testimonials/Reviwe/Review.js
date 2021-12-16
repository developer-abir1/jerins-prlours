import { Container, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const Review = (props) => {
    const { name, company, position, rating, description, photo } = props.review
    return (
        <Container maxWidth="sm"  >
            <Paper >

                <Box sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
                    <Box>
                        <img src={photo} style={{ width: "100px" }} alt="" />
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            {name}
                        </Typography>
                        <Typography>
                            {position},{company}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                    <Box>
                        <Typography variant="caption" sx={{ color: 'gray' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptate. Quis consequatur impedit ipsa tenetur voluptatibus pariatur explicabo dicta laborum doloribus accusamus quidem quo optio architecto rem quaerat, ipsam error. Id necessitatibus
                        </Typography>
                    </Box>
                    <br />
                    <Rating
                        readOnly
                        value={rating}
                    />


                </Box>
            </Paper>
        </Container>


    );
};

export default Review;