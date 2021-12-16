import { Description } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import Carousel from 'react-material-ui-carousel';
import photo1 from "../../../../../image/Image_Icon/Image/Ellipse 90.png"
import photo2 from "../../../../../image/Image_Icon/Image/Ellipse 91.png"
import photo3 from "../../../../../image/Image_Icon/Image/Ellipse 92.png"
import Review from '../Reviwe/Review';

const reviews = [
    {
        name: "Nash Patik",
        company: 'Manpol',
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui cupiditate nemo tempore porro modi, quos fugiat natus dolores ",
        rating: 2,
        photo: photo1
    },
    {
        name: "Miriam Barron",
        company: 'Microsoft',
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui cupiditate nemo tempore porro modi, quos fugiat natus dolores ",
        rating: 5,
        photo: photo2
    },
    {
        name: "Bria Malone",
        company: 'Google',
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui cupiditate nemo tempore porro modi, quos fugiat natus dolores ",
        rating: 5,
        photo: photo3
    },
    {
        name: "Bria Malone",
        company: 'Ex-Evaly',
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui cupiditate nemo tempore porro modi, quos fugiat natus dolores ",
        rating: 3,
        photo: photo3
    },
    {
        name: "Bria Malone",
        company: 'Alibaba',
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui cupiditate nemo tempore porro modi, quos fugiat natus dolores ",
        rating: 5,
        photo: photo3
    },
]

const Testimonials = () => {
    return (
        <Box sx={{ p: 2, mb: 2 }}>

            <Typography variant='h4' sx={{ fontWeight: 600, textAlign: 'center', p: 2, mb: 2 }}>
                Testimonials
            </Typography>
            <Container>

                <Carousel>

                    {
                        reviews.map(review => <Review key={review.company} review={review}></Review>)
                    }


                </Carousel>




            </Container>
        </Box >
    );
};

export default Testimonials;