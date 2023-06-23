import React, { useEffect, useState } from 'react'
import HeadProps from './components/Head'
import { Grid } from '@mui/material'
import { HomeContainer } from '../pages/styles/home-style'
import HeaderComponent from './components/Header'
import MainComponent from './components/Main'
import { useConsult } from '../context/useConsult'

export default function Home() {
  const { listIp, resultIp, error, loading } = useConsult()
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event)
  }

  const handleList = () => {
    listIp(text)
  }

  useEffect(() => {}, [resultIp])

  return (
    <Grid>
      <HeadProps />
      <HomeContainer>
        <HeaderComponent
          result={resultIp}
          handleSearch={() => handleList}
          handleChange={handleChange}
        />
        <MainComponent result={resultIp} />
      </HomeContainer>
    </Grid>
  )
}
