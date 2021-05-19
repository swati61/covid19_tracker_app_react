import React, { Component } from "react";
import loadingImg from "../assets/hourglass.gif";
import HomeStyle from "../css/HomeStyle.css";
import Country from "./Country";
import DataBoxes from "./DataBoxes";
import DataTitle from "./DataTitle";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: [],
      isLoaded: false,
      title: "Global",
      selectedValue: null,
    };
  }

  componentDidMount() {
    this.featchCovidData();
  }

  featchCovidData() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            covidData: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  selectedValueHandler = (selectedValue) => {
    this.setState({ selectedValue });
  };

  setClearCountryHandler = () => {
    this.setState({ isLoaded: true });
    this.setState({ selectedValue: null });
    this.featchCovidData();
    this.setState({ isLoaded: false });
  };

  render() {
    const { error, isLoaded, covidData, title, selectedValue } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <img className="loadingImg" src={loadingImg} />
          <span className="loadingText">Fetch Data</span>
        </div>
      );
    } else {
      return (
        <>
          <DataTitle data={covidData} title={title}></DataTitle>
          <DataBoxes data={covidData} selectedValue={selectedValue}></DataBoxes>
          <Country
            countries={covidData.Countries}
            selectedValueHandler={this.selectedValueHandler}
            setClearCountryHandler={this.setClearCountryHandler}
          ></Country>
        </>
      );
    }
  }
}

export default Home;
