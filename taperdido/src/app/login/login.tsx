"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header/index'
import { useState } from 'react';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '/types/constants'
import { createClient } from '@supabase/supabase-js'
import theme from '../../../styles/theme'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = theme;

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const Register = async () => {
        window.location.href = '/cadastro';
    }

    const handleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: senha,
            });

            if (error) {
                setError(error.message);
            } else {
                window.location.href = '/home';
            }

        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#FFF',
                    }}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Header />
                            <Typography component="h3" variant="h3">
                                Ta Perdido?
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                     required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    className={'primary.main'}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Manter conectado"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="success"
                                    onClick={handleLogin}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Logar
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="success"
                                    onClick={Register}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Cadastrar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Esqueceu sua senha?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/home" variant="body2">
                                            Entrar fazer login?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </Box>
            </Container >
        </ThemeProvider >
    );
}