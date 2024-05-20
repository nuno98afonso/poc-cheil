"use client";

import React, { useState } from 'react';
import { Box, Grid, Typography, Container, Button, TextField } from '@mui/material';
import AuthLogin from '../components/authentication/office-button';


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box>
        <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography component="h1" variant="h5" align="center" color={"primary"}>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                >
                Login
                </Button>
                <AuthLogin />
            </form>
        </Container>
    </Box>
  );
};

export default LoginPage;
