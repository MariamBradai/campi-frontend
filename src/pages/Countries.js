import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/countries`)
      .then(res => {
        setCountries(res.data)
      })
      .catch(err => {
        alert(err.message)
      })
  }, [])
  return (
    <div>
      {countries.map(t => (
        <div key={t._id}>
          <h1>{t.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Countries