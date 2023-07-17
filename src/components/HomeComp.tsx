import { Button, Grid, Typography, createTheme } from '@mui/material';
import Link from 'next/link';
import React from 'react';
const obj = [{ link: 'gpsc', title: 'gpsc previous year paper' }];

const HomeComp = () => {
  return (
    <Grid
      container
      direction="column"
      gap={3}
      px={{ xs: 15, sm: 5 }}
      height="95vh"
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        fontWeight="bold"
        sx={{
          my: { xs: 4, sm: 10 },
        }}
      >
        Click Below Button To Read Document
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        wrap="wrap"
      >
        {obj.map((item) => (
          <Grid item key={item.link}>
            <Button
              component={Link}
              href={`/paper/${item.link}`}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                boxShadow: 'md',
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundImage: `linear-gradient(to top right, '#bde1ff', '#828aff')`,
                  boxShadow: 'lg',
                },
              }}
            >
              {item.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HomeComp;
