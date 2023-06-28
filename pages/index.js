import React from 'react'
import HeadProps from '../components/Head'
import { Alert, Box, Grid } from '@mui/material'
import HeaderComponent from '../components/Header'
import MainComponent from '../components/Main'
import { useConsult } from '../context/useConsult'
import { HomeContainer } from '../styles/home-style'

export default function Home() {
  const { error } = useConsult()

  return (
    <Grid>
      {error && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Alert
            severity="error"
            sx={{
              position: 'absolute',
              zIndex: 0,
              top: 10,
            }}
          >
            {error}
          </Alert>
        </Box>
      )}
      <HeadProps />
      <HomeContainer>
        <HeaderComponent />
        <MainComponent />
      </HomeContainer>
    </Grid>
  )
}
