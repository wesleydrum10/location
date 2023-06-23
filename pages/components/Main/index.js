import React, { useEffect, useState } from 'react'
import { MainContent } from '../../styles/home-style'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('../Map'), { ssr: false })

function MainComponent({ result }) {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.log('Geolocalização não é suportada neste navegador.')
    }
  }

  function showPosition(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  function renderMap() {
    return (
      <MapWithNoSSR
        lat={result?.location?.lat || latitude}
        lng={result?.location?.lng || longitude}
      />
    )
  }

  useEffect(() => {
    getLocation()
    renderMap()
  }, [result])

  return <MainContent>{renderMap()}</MainContent>
}

export default MainComponent
