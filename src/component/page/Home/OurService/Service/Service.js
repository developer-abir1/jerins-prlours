import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React from 'react';

const Service = (props) => {
    const { describetion, price, title, icon } = props.service

    return (
        <Grid item xs={12} md={4}>
            <Box sx={{
                display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2
            }}>
                <Box>
                    <img style={{ width: '80px' }} src={icon} alt="" />
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'black' }} gutterBottom component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#F31383' }} gutterBottom component="div">
                        $  {price}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'gray' }} gutterBottom component="div">
                        {describetion.slice(0, 150)}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default Service;