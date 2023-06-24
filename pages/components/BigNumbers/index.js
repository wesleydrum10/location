import React, { useEffect, useState } from 'react'
import { Divider, Typography } from '@mui/material'
import {BoxContent, PaperContainer} from '../../../styles/big-numbers-styles'

function BigNumbers({ ip, location, timeZone, isp }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window?.innerWidth <= 600) setIsMobile(true)
  }, [])

  return (
    <PaperContainer elevation={0}>
      <BoxContent>
        <Typography variant="overline" color="grey" fontWeight={700}>
          Ip Address
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {ip}
        </Typography>
      </BoxContent>
      {!isMobile && <Divider orientation="vertical" flexItem />}
      <BoxContent>
        <Typography variant="overline" color="grey" fontWeight={700}>
          Location
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {location?.city}, {location?.country}
          {' '}
          {location?.postalCode}
        </Typography>
      </BoxContent>
      {!isMobile && <Divider orientation="vertical" flexItem />}
      <BoxContent>
        <Typography variant="overline" color="grey" fontWeight={700}>
          TimeZone
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {timeZone}
        </Typography>
      </BoxContent>
      {!isMobile && <Divider orientation="vertical" flexItem />}
      <BoxContent>
        <Typography variant="overline" color="grey" fontWeight={700}>
          Isp
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {isp ? isp :'Não informado'}
        </Typography>
      </BoxContent>
    </PaperContainer>
  )
}

export default BigNumbers
