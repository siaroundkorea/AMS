import React, { Component } from 'react';
import styled from 'styled-components';

const API_KEY = 'b43a607f4e47bd6ceba2c429adc641d9';

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
      name: '',
      icon: '',
    }
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Daejeon&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: Math.floor(json.main.temp - 273.15),
        name: json.weather[0].main,
        icon: json.weather[0].icon,

      });
    });
  }

  componentDidMount() {
    this.getWeather()
  }
  

  render() {
      const { temperature, name,icon} = this.state;
      const img_url = `http://openweathermap.org/img/w/${icon}.png`;
          return(
            <PartCWeather>
              <div style={{float:"left",fontSize:"36px", fontWeight:"bolder"}}> {name} / {temperature}°C  </div>
              <div style={{float:"left", marginLeft:"15px",marginTop:"-15px"}}> <img width="70px" height="70px" alt="weather_icon" src={img_url}/></div>
            </PartCWeather>
          );
    }
}

export default Weather;


const PartCWeather = styled.div`
    color: #FFC63B;
    width: 440px;
    height: 50px;
`