import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import icon1 from '../../../../../image/Image_Icon/Icon/Group 1372.png'
import icon2 from '../../../../../image/Image_Icon/Icon/Group 1373.png'
import icon3 from '../../../../../image/Image_Icon/Icon/Group 1374.png'
import Service from '../Service/Service';

const services = [
    {
        title: "Anti Age Face Treatment ",
        price: 199,
        describetion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio inventore obcaecati magnam ex, nostrum non molestias sed ad eligendi, voluptatem necessitatibus. Voluptatem ut, at nemo totam eum reiciendis quo.',
        icon: icon1,
    },
    {
        title: "Hair Color & Styleing",
        price: 99,
        describetion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio inventore obcaecati magnam ex, nostrum non molestias sed ad eligendi, voluptatem necessitatibus. Voluptatem ut, at nemo totam eum reiciendis quo.',
        icon: icon2,
    },
    {
        title: "Sjin Care Treatment ",
        price: 200,
        describetion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio inventore obcaecati magnam ex, nostrum non molestias sed ad eligendi, voluptatem necessitatibus. Voluptatem ut, at nemo totam eum reiciendis quo.',
        icon: icon3,
    },
]



const OurServices = () => {
    return (

        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, mb: 5 }}>
            <Box>
                <Typography variant='h4' sx={{ color: "black", textAlign: "center", fontWeight: 600, }}>
                    Our Awesome <span style={{ color: "#F31383" }}>Service</span>
                </Typography>
                <Grid container spacing={2} sx={{ mt: 5, fontFamily: "'Roboto', sans-serif" }}>
                    {
                        services.map(service => <Service key={service.price} service={service}></Service>)
                    }
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button variant="contained" sx={{ background: "#F31383", }}>Expolor More</Button>
                </Box>
            </Box>
        </Container>

    );
};

export default OurServices;