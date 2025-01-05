import React from 'react';
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material';

const LoginPage = () => {
  return (
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          
          {/* Username/Password Login */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>

          {/* Divider */}
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
            OR
          </Typography>

          {/* OAuth Login Options */}
          <a href="http://localhost:5000/loginWithGoogle">
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1, bgcolor: '#3b5998', color: '#fff' }}
          >
            Login with Facebook
          </Button>
          </a>

          <a href="http://localhost:5000/loginWithGoogle">
            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1, bgcolor: '#db4437', color: '#fff' }}
            >
                Login with Google
            </Button>
        </a>
        </Box>
      </Container>
  );
};

export default LoginPage;
