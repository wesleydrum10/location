/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from 'next/dynamic'
import React from 'react'
import { MainContent } from '../../styles/home-style'


function MainComponent({ result }) {
  
  const MapWithNoSSR = dynamic(() => import('../Map'), {
    ssr: false,
  })

  return (
    <MainContent>
      <MapWithNoSSR lat={result?.location?.lat} lng={result?.location?.lng} />
    </MainContent>
  )
}

export default MainComponent
