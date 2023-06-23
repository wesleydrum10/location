import React, { createContext, useContext, useState } from 'react'
import { service } from '../services'

export const ConsultContext = createContext()

const ConsultProvider = ({ children }) => {
  const [resultIp, setResultIp] = useState()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const listIp = (ip) => {
    setLoading(true)
    service.consult
      .listConsultIp(ip)
      .then(setResultIp)
      .catch(setError)
      .finally(() => setLoading(false))
  }

  const value = { 
    listIp,
    resultIp,
    error,
    loading 
  }
  return (
    <ConsultContext.Provider value={value}>{children}</ConsultContext.Provider>
  )
}

const useConsult = () => {
  const context = useContext(ConsultContext)
  return context
}

export { ConsultProvider, useConsult }
