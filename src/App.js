import React, { useEffect, useState, useRef } from 'react'
import "./App.css"
import axios from "axios"

const App = () => {
  const nameRef = useRef()

  const [data, setData] = useState({})
  const [inputdata, setInputdata] = useState("")
  const apikey = "d2ee6a54b50e7841f843b610e9a0e97b"

  const getweatherDetails = (cityName) =>{
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apikey;
    axios.get(apiURL).then((res)=>{
      console.log("Response:",res.data)
      setData(res.data)
    }).catch((error)=>{
      console.log("Error:",error)
    })  
  }

  useEffect(()=>{
    getweatherDetails("delhi")
  },[])

  const handleInputChange = (e) =>{
    setInputdata(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    getweatherDetails(inputdata)
    nameRef.current.value = ""
  }

  return (
    <>
      <div>
        <div className="weather-image flex flex-col gap-4 justify-center items-center">
          <p className="text-xl font-bold text-white">WEATHER APP</p>
          <input type="text" onChange={handleInputChange} ref={nameRef}/>
          <button type="submit" onClick={handleSubmit} className="bg-blue-700 text-white px-6 py-1">
            Search
          </button>
        </div>
        <div className="flex justify-center items-center h-[300px]">
          <div className="flex flex-col justify-center items-center border shadow-xl py-10 px-36">
            <img
              className="h-20 w-20"
              src="data:image/jpeg;base64,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"
              alt='weather'
            />
            <p>{data?.name}</p>
            <p className="font-bold text-xl">
              {(data?.main?.temp - 273.15).toFixed(2)}c
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App