import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import palerMan from '../../../../../image/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';


const HeaderMain = () => {
    return (
        <Container sx={{ background: "#fff8f5", p: 2 }}>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        <Box>
                            <Typography variant='h3' sx={{ textTransform: "uppercase", fontWeight: 600, color: "#111430" }}>

                                Beauty salon for every women

                            </Typography>
                            <Box sx={{ mt: 5, mb: 5 }}>
                                <Typography variant="body2" gutterBottom sx={{ color: 'gray' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatum ab. Facere maxime quasi labore natus placeat autem numquam excepturi cumque adipisci officia! Accusamus ut ab dolores! Sed, minus deleniti.
                                </Typography>
                            </Box>
                        </Box>
                        <Button variant="contained" sx={{ background: "#F31383", fontWeight: 500 }}> get an Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>

                    <img src={palerMan} style={{ width: "100%" }} alt="" srcset="" />
                </Grid>
            </Grid>


        </Container>
    );
};

export default HeaderMain;