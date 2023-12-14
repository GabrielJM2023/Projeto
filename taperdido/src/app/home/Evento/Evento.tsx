"use client"

import Card from '@mui/material/Card';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '/types/constants'
import { createClient } from '@supabase/supabase-js'
import theme from '../../../../styles/theme'
import Image from '../../../../node_modules/next/image';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const defaultTheme = theme;

export default function Evento() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Card sx={{
                height: '80%', width: '100%', alignItems: 'left',
                marginTop: 15, marginLeft: 3, paddingLeft: 2, bgcolor: 'sixth.main', paddingRight: 4
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Box sx={{
                            marginBottom: 2,
                            alignItems: 'left', flexDirection: 'column', display: 'flex', bgcolor: '',
                        }}>
                            <Typography component="h3" variant="h2">
                                Pizzaria e Restaurante Bora Comer
                            </Typography>
                            <Typography component="h3" variant="h4">
                                Pizzaria * Família * Restaurante
                            </Typography>
                        </Box>

                        <Box sx={{
                            alignItems: 'left', flexDirection: 'column', display: 'flex', bgcolor: ''
                        }}>
                            <Card sx={{ height: '70%', width: '70%', marginLeft: 2, alignItems: 'left', bgcolor: 'secondary.main' }}>
                                <Typography component="h3" variant="h4">
                                    Informações
                                </Typography>
                            </Card>
                        </Box>

                        <Card sx={{ height: '70%', width: '70%', marginLeft: 2, alignItems: 'left', marginTop: 1, bgcolor: 'secondary.main' }}>
                            <Box sx={{
                                alignItems: 'left', bgcolor: '',
                            }}>
                                <Typography component="h3" variant="h4">
                                    Restaurante para toda família, com boa comida e recepção
                                </Typography>
                                <Box sx={{
                                    alignItems: 'left', bgcolor: '', marginTop: 33,
                                }}>
                                    <Typography component="h3" variant="h4">
                                        (66) 4002 - 8922
                                    </Typography>
                                    <Typography component="h3" variant="h4">
                                        @booracomer_roo
                                    </Typography>
                                    <Typography component="h3" variant="h4">
                                        contato@boracomer.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{
                                    marginTop: 7,
                                }}>
                                    <Grid item xs={13} sm={12} md={12} lg={12} >
                                        <Card
                                            sx={{ height: '100%', }}
                                        >
                                            <CardMedia
                                                component="div"
                                                sx={{
                                                    pt: '100%',
                                                }}
                                                image="https://source.unsplash.com/random?wallpapers"
                                            />
                                        </Card>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card >

        </ThemeProvider >
    )
}