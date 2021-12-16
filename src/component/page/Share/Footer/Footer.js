import { Box, Container, Grid, Typography, } from '@mui/material';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlagCheckered, faMap, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import facebook from "../../../../image/Image_Icon/Icon/Vector.png"
import youtub from "../../../../image/Image_Icon/Icon/Vector-3.png"
import instagram from "../../../../image/Image_Icon/Icon/Vector-1.png"
import linkin from "../../../../image/Image_Icon/Icon/Vector-2.png"
import map from "../../../../image/Image_Icon/Icon/map-pin-2-fill.png"


const Footer = () => {
    return (
        <div style={{ background: "#F31383", }}>
            <Container sx={{ p: 5, }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Grid container spacing={2}    >
                    <Grid item xs={12} md={4}>
                        <Box style={{ color: 'white', display: 'flex', }}>
                            <Box sx={{ mr: 2 }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </Box>
                            <Box>
                                H#000(oth Floor), Road #00 <br />
                                New DOHS , Mohakhali,Dhaka Bangladesh
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant='h5' sx={{ color: 'white', fontWeight: 600 }} >
                            Company
                        </Typography>
                        <ul style={{ listStyle: 'none', color: 'white' }} >
                            <li style={{ marginTop: 10 }}>About</li>
                            <li style={{ marginTop: 10 }}>Project</li>
                            <li style={{ marginTop: 10 }}>Our Team</li>
                            <li style={{ marginTop: 10 }}>Submit Listing</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant='h5' sx={{ color: 'white', fontWeight: 600 }} >
                            Quick Links
                        </Typography>
                        <ul style={{ listStyle: 'none', color: 'white' }} >
                            <li style={{ marginTop: 10 }}>Quick Links </li>
                            <li style={{ marginTop: 10 }}>Rentals</li>
                            <li style={{ marginTop: 10 }}>Sales</li>
                            <li style={{ marginTop: 10 }}>Contact </li>
                            <li style={{ marginTop: 10 }}>Our Blogs </li>
                        </ul>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 5 }}>
                            <Typography variant='h5' sx={{ color: 'white', fontWeight: 600 }}>
                                About US
                            </Typography>
                        </Box>
                        <Typography variant="text" sx={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos rerum sunt placeat a repellat ad pariatur! Quas iure nostrum eius sunt nesciunt, reiciendis unde molestias quos rem assumenda
                        </Typography>
                        <Box sx={{ mt: 5 }}>
                            <img style={{ width: "20px", marginLeft: 15 }} src={facebook} alt="" />
                            <img style={{ width: "20px", marginLeft: 15 }} src={youtub} alt="" />
                            <img style={{ width: "20px", marginLeft: 15 }} src={instagram} alt="" />
                            <img style={{ width: "20px", marginLeft: 15 }} src={linkin} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Footer;