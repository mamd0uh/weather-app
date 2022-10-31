import React from 'react'

export default function Form({getWeather}) {
  return (

    <div className="container">
    <div className="searchBox">
    <form onSubmit={getWeather}>
        <span><input type="text" name="city" placeholder="City..." /> </span>
        <span><input type="text" name="country" placeholder="Country..." /></span>
        <button>Get Weather</button>
    </form>
    </div>
    </div>
  )
}
