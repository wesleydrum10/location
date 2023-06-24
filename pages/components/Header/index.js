import { Typography } from '@mui/material'
import React from 'react'
import { HeaderContent } from '../../../styles/home-style'
import { InputComponent, SearchContent, ButtonContent } from '../../../styles/header-styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import BigNumbers from '../BigNumbers'

export default function HeaderComponent({result, handleSearch, handleChange}) {
  
  return (
    <HeaderContent image="/pattern-bg-desktop.png">
      <Typography variant="h5" color="white" fontWeight={700}>
        IP Address Tracker
      </Typography>
      <SearchContent>
        <InputComponent placeholder="Search for any IP address or domain" onChange={(e) => handleChange(e.target.value)} />
        <ButtonContent onClick={() => handleSearch()}>
          <ArrowForwardIosIcon fontSize='small'/>
        </ButtonContent>
      </SearchContent>
      {result && (
        <BigNumbers ip={result?.ip} location={result?.location} timeZone={result?.location?.timezone} isp={result?.isp} />
      )}
    </HeaderContent>
  )
}


