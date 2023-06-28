/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from 'next/dynamic'
import React from 'react'
import { useConsult } from '../../context/useConsult'
import { MainContent } from '../../styles/home-style'

function MainComponent({ result }) {
  const { resultIp } = useConsult()

  const MapWithNoSSR = dynamic(() => import('../Map'), {
    ssr: false,
  })

  return (
    <MainContent>
      <MapWithNoSSR lat={resultIp?.location?.lat} lng={resultIp?.location?.lng} />
    </MainContent>
  )
}

export default MainComponent
