import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#f5f5f5',
        py: 6,
        borderTop: '1px solid #e0e0e0',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              MediGrid
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transforming healthcare through innovative technology solutions.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>Home</Link>
            <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
            <Link href="/services" color="inherit" display="block" sx={{ mb: 1 }}>Services</Link>
            <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>Contact</Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              123 Healthcare Avenue
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              San Francisco, CA 94103
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Email: info@medigrid.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 5 }}>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
            <IconButton aria-label="facebook" color="primary">
              <Facebook />
            </IconButton>
            <IconButton aria-label="twitter" color="primary">
              <Twitter />
            </IconButton>
            <IconButton aria-label="linkedin" color="primary">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="instagram" color="primary">
              <Instagram />
            </IconButton>
          </Stack>
          
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} MediGrid. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
            <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            |
            <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
