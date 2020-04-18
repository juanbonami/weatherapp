import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      date: [],
      data: [],
    };
  }

  componentDidMount() {
    const urlCall =
      "http://api.openweathermap.org/data/2.5/forecast?q=Dallas,US&units=imperial&appid=2eb8b68608924d3b6a8faf0074645c64";

    const request = axios.get(urlCall);
    request.then((response) => {
      console.log(response);

      const cityName = response.data.city.name;

      const dayOne = response.data.list[0].main.temp;
      const dateOne = response.data.list[0].dt_txt;

      const dayTwo = response.data.list[8].main.temp;
      const dateTwo = response.data.list[8].dt_txt;

      const dayThree = response.data.list[16].main.temp;
      const dateThree = response.data.list[16].dt_txt;

      const dayFour = response.data.list[24].main.temp;
      const dateFour = response.data.list[24].dt_txt;

      const dayFive = response.data.list[32].main.temp;
      const dateFive = response.data.list[32].dt_txt;

      console.log(cityName);

      console.log(dayOne);
      console.log(dateOne);

      console.log(dayTwo);
      console.log(dateTwo);

      console.log(dayThree);
      console.log(dateThree);

      console.log(dayFour);
      console.log(dateFour);

      console.log(dayFive);
      console.log(dateFive);

      this.setState({
        city: cityName,
        date: [dateOne, dateTwo, dateThree, dateFour, dateFive],
        data: [dayOne, dayTwo, dayThree, dayFour, dayFive],
      });
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.city} </h2>

        <h1> {this.state.date[0]} </h1>
        <h2>Temp: {this.state.data[0]} </h2>

        <h1> {this.state.date[1]} </h1>
        <h2>Temp: {this.state.data[1]} </h2>

        <h1> {this.state.date[2]} </h1>
        <h2>Temp: {this.state.data[2]} </h2>

        <h1> {this.state.date[3]} </h1>
        <h2>Temp: {this.state.data[3]} </h2>

        <h1> {this.state.date[4]} </h1>
        <h2>Temp: {this.state.data[4]} </h2>
      </div>
    );
  }
}
