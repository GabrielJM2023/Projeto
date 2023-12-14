"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '/types/constants'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const defaultTheme = theme;

const cards = [1];

const Teste = (
    console.log('Teste')
);

export default function Home() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 12 }} maxWidth="xl">
                    <Box sx={{ color: 'tertiary.main' }}>
                        <Typography component="h3" variant="h4">
                            Estabelecimentos melhores avaliados
                        </Typography>
                        <Typography component="h3" variant="h6">
                            Os melhores para encontrar
                        </Typography>
                        <hr></hr>
                    </Box>
                    <Grid container spacing={4} >
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4} lg={3} onClick={Teste}>
                                <CardActionArea component="a" href="/home/Evento">
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="div"
                                            sx={{
                                                pt: '75%',
                                            }}
                                            image="https://source.unsplash.com/random?wallpapers"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }} >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Bora Comer
                                            </Typography>
                                            <Typography>
                                                Desfrute de uma explosão de sabores em cada fatia em nossa pizzaria. Uma experiência irresistível para os amantes da boa pizza.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider >
    );
}