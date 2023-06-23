import { Box, styled } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

const InputComponent = styled('input')((props) => ({
  width: '520px',
  height: '60px',
  borderRadius: '15px 0px 0px 15px',
  border: 'none',
  outline: 'none',
  paddingLeft: '30px',
  fontSize: '1.2rem',
  '@media(max-width: 600px)': {
    width: '100%',
    fontSize: '1rem',
    paddingLeft: '20px',
  }
}))

const SearchContent = styled(Box)((props) => ({
  display: 'flex',
  '@media(max-width: 600px)': {
    width: '100%'
  }
}))

const ButtonContent = styled(LoadingButton)((props) => ({
  background: '#000000',
  borderRadius: '0px 15px 15px 0px',
  color: '#ffffff',
  ':hover': {
    background: '#000000',
  }
}))

export { InputComponent, SearchContent, ButtonContent }
