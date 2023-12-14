"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '/types/constants'
import { createClient } from '@supabase/supabase-js'
import theme from '../../../../styles/theme'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = theme;

export default function Login() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box
                        sx={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography component="h3" variant="h3">
                            Perfil
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="nome"
                                label="Nome Completo"
                                name="nome"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={10}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Alterar
                                    </Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Salvar
                                    </Button>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            marginTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography component="h3" variant="h3">
                            Ajuda
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                sx={{ mt: 3, mb: 2 }}
                                fullWidth={true}
                            >
                                Sair
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                sx={{ mb: 2 }}
                                fullWidth={true}
                            >
                                Sobre
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                sx={{ mb: 2 }}
                                fullWidth={true}
                            >
                                Reportar um erro
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                sx={{ mb: 2 }}
                                size='large'
                                fullWidth={true}
                            >
                                Trabalhe conosco
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </ThemeProvider >
    );
}