import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Grid } from '@mui/material'
import { useConsult } from '../../../context/useConsult'
import { useEffect, useState } from 'react'

const blackMarker = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function Map({ lat, lng }) {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const { resultIp } = useConsult()

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

  useEffect(() => {getLocation()}, [resultIp])

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', position: 'relative', zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && <Marker position={[lat, lng]} icon={blackMarker} />}
      <Grid sx={{ height: '60vh', color: 'transparent' }}>Mapa</Grid>
    </MapContainer>
  )
}

export default Map
