import React, { Component } from 'react';

const API_KEY = 'b43a607f4e47bd6ceba2c429adc641d9';

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
      name: '',
    }
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Daejeon&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: Math.floor(json.main.temp - 273.15),
        name: json.weather[0].main,

      });
    });
  }

  componentDidMount() {
    this.getWeather()
  }
  

  render() {
      const { temperature, name} = this.state;
          return(
            <>
                {name} / {temperature}°C  
            </>
          );
    }
}

export default Weather;