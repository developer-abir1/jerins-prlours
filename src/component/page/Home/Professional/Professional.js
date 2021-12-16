import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import photo from "../../../../image/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"

const Professional = () => {
    return (
        <Box sx={{ background: "#fff8f5" }}>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <img src={photo} style={{ width: "100%" }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Container>
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: 600, color: "#111430" }} >
                                    Let us handle Your <br /> screen <span style={{ color: "#F31383" }}>Professionally</span>
                                </Typography>
                                <Box sx={{ mb: 5, mt: 5 }}>
                                    <Typography variant="caption" sx={{ color: 'gray', }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus delectus excepturi ratione voluptate quia sit assumenda, impedit veritatis itaque vero quae recusandae distinctio repudiandae at. Quisquam mollitia recusandae enim nam, porro reiciendis voluptates molestiae perferendis quia numquam, non laudantium et voluptas blanditiis placeat nemo doloremque labore
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: 600, color: "#F31383" }}>
                                            500+
                                        </Typography>
                                        <Typography>
                                            Happy Coustomar
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: 600, color: "#F31383" }}>
                                            16+
                                        </Typography>
                                        <Typography>
                                            Total Service
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Professional;