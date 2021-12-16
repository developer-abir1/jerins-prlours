import { Button, Container, Grid, TextareaAutosize, Typography, } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {

    return (
        <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "#fff8f5" }}>

            <Container maxWidth="md">
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 5, mt: 5, fontWeight: 700 }}>
                    Let us handle your <br /> project , professionally
                </Typography>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center" }}>
                    <Grid item xs={6} md={6}>

                        <TextField
                            sx={{ display: 'flex', justifyContent: "center", background: 'white', border: "none", }}

                            placeholder='Fast Name'

                            size="small"
                        />

                    </Grid>
                    <Grid item xs={6} md={6}>

                        <TextField
                            sx={{ display: 'flex', justifyContent: "center", background: 'white', border: "none", }}

                            placeholder='Last Name'


                            size="small"
                        />

                    </Grid>
                    <Grid item xs={6} md={6}>

                        <TextField
                            sx={{ display: 'flex', justifyContent: "center", background: 'white', border: "none", }}


                            placeholder='Email Address'

                            size="small"
                        />

                    </Grid>
                    <Grid item xs={6} md={6}>

                        <TextField
                            sx={{ display: 'flex', justifyContent: "center", background: 'white', border: "none", }}
                            placeholder='Phone Numbar'
                            size="small"
                            style={{ border: "none", }}
                        />

                    </Grid>
                    <Grid item xs={12} md={12}>

                        <TextareaAutosize

                            minRows={8}
                            placeholder='You Massage'
                            style={{ width: "100%", border: "1px solid #EBEBEB", }}

                        />

                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: 'center', mt: 5, mb: 5 }}>
                    <Button variant="contained" sx={{ background: "#F31383", fontWeight: 500 }}  >Send Massage</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Contact;