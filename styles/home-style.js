import { Box, styled } from '@mui/material'

const HomeContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateRows: '40vh 60vh',
  gridTemplateAreas: `"header"
                      "main"`,
}))

const HeaderContent = styled(Box)((props) => ({
  gridArea: 'header',
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '30px 20px',
  '@media (max-width: 600px)': {
    gap: '10px',
    paddingTop: '10px',
  },
}))

const MainContent = styled(Box)(() => ({
  gridArea: 'main',
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: 1,
}))

export { HomeContainer, HeaderContent, MainContent }
