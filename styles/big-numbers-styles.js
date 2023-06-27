import { Box, Paper, styled } from '@mui/material'

const BoxContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '180px',
  marginRight: '50px',
  '@media (max-width: 600px)': {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0px',
    textAlign: 'center',
  },
}))

const PaperContainer = styled(Paper)(() => ({
  display: 'flex',
  position: 'absolute',
  zIndex: 2,
  padding: '40px 30px',
  gap: '20px',
  borderRadius: '15px',
  top: 170,
  '@media (max-width: 600px)': {
    width: '90%',
    flexDirection: 'column',
    padding: '20px 10px',
    gap: '5px',
    marginTop: '0px',
    top: 150,
  },
}))

const RenderDevice = styled(Box)(() => ({
  display: 'flex',
  '@media (max-width: 600px)': {
    display: 'none'
  }
}))

export { BoxContent, PaperContainer, RenderDevice }
