import React from 'react'
import { Divider, Typography, useTheme } from '@mui/material'
import {
  BoxContent,
  PaperContainer,
  RenderDevice,
} from '../../styles/big-numbers-styles'

function BigNumbers({ ip, location, timeZone, isp }) {

  return (
    <PaperContainer elevation={0}>
      <BoxContent>
        <Typography variant="overline" color="primary" fontWeight={700}>
          Ip Address
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {ip}
        </Typography>
      </BoxContent>
      <RenderDevice>
        <Divider orientation="vertical" flexItem />
      </RenderDevice>
      <BoxContent>
        <Typography variant="overline" color="primary" fontWeight={700}>
          Location
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {location?.city}, {location?.country} {location?.postalCode}
        </Typography>
      </BoxContent>
      <RenderDevice>
        <Divider orientation="vertical" flexItem />
      </RenderDevice>
      <BoxContent>
        <Typography variant="overline" color="primary" fontWeight={700}>
          TimeZone
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {timeZone}
        </Typography>
      </BoxContent>
      <RenderDevice>
        <Divider orientation="vertical" flexItem />
      </RenderDevice>
      <BoxContent>
        <Typography variant="overline" color="primary" fontWeight={700}>
          Isp
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {isp ? isp : 'Não informado'}
        </Typography>
      </BoxContent>
    </PaperContainer>
  )
}

export default BigNumbers
