import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useProgramsContext } from '../../hooks/context-hooks/useProgramsContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Home() {
  const { currAppVariant, selectAppVariant, appVariants } = useProgramsContext();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container alignItems={'center'} mb={2}>
        <Grid item xs>
          {<Typography variant={'h4'}>Home</Typography>}
        </Grid>
      </Grid>
      <Grid container alignItems={'start'} justifyContent={'center'} mb={2}>
        {appVariants.map((av) => {
          const AvatarIcon = av.icon;
          return (
            <Grid item key={av.name}>
              <Card sx={{ maxWidth: 300, m: 1, bgcolor: av.secondary }}>
                <CardHeader
                  avatar={<AvatarIcon sx={{ color: av.primary }} />}
                  sx={{
                    color: av.mode === 'dark' ? 'white' : 'black',
                  }}
                  title={av.title}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: av.mode === 'dark' ? 'white' : 'black',
                    }}
                  >
                    {av.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'end' }}>
                  <IconButton
                    sx={{
                      bgcolor: av.backgroundSecondary,
                    }}
                    disabled={av === currAppVariant}
                    onClick={() => {
                      selectAppVariant(av);
                    }}
                  >
                    <FavoriteIcon
                      sx={{
                        color: av !== currAppVariant ? av.primary : null,
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
