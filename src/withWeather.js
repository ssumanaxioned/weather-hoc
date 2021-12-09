import React, { Component } from 'react';

const Weather = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isFetched: false,
        info: null
      }
    }

    componentDidMount() {
      let apikey = '476d53f468aad0510ba49193822cb137';
      let cityname = this.props.name;

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ 
            info: data,
            isFetched: true
           })
           console.log(data);
        })
        .catch(error => console.warn(error))
    }

    render() {
      let just = this.state.info;
      return (
        (this.state.isFetched === true)? <WrappedComponent name={just.name} temp={just.main.temp} feels_like={just.main.feels_like} humidity={just.main.humidity} wind={just.wind.speed} /> : null
      )
    }
  }
}

export default Weather

