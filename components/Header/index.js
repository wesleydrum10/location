/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HeaderContent } from '../../styles/home-style'
import {
  InputComponent,
  SearchContent,
  ButtonContent,
} from '../../styles/header-styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import BigNumbers from '../BigNumbers'
import { useConsult } from '../../context/useConsult'

export default function HeaderComponent({}) {
  const { error, resultIp, listIp, loading } = useConsult()

  const [text, setText] = useState('')

  const handleList = () => {
    listIp(text)
  }

  useEffect(() => {
    listIp(text)
  },[])

  return (
    <HeaderContent image="/pattern-bg-desktop.png">
      <Typography variant="h5" color="white" fontWeight={700}>
        IP Address Tracker
      </Typography>
      <SearchContent>
        <InputComponent
          placeholder="Search for any IP address or domain"
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonContent onClick={() => handleList()}>
          {loading ? (
            <CircularProgress />
          ) : (
            <ArrowForwardIosIcon fontSize="small" />
          )}
        </ButtonContent>
      </SearchContent>
      {resultIp && !error && (
        <BigNumbers
          ip={resultIp?.ip}
          location={resultIp?.location}
          timeZone={resultIp?.location?.timezone}
          isp={resultIp?.isp}
        />
      )}
    </HeaderContent>
  )
}
