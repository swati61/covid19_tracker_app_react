import React, { Component } from "react";
import HomeStyle from "../css/HomeStyle.css";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: false,
    };
  }

  changeCountryHandler = (event) => {
    const selectedCountry = event.target.value;
    this.props.countries.map((key) => {
      if (key.ID === selectedCountry) {
        this.props.selectedValueHandler(key);
      }
    });
    this.setState({ selectedValue: true });
  };

  onClearCountryHandler = () => {
    this.props.setClearCountryHandler();
  };

  render() {
    return (
      <div>
        <div>
          <select
            className="country-dropdown"
            onChange={this.changeCountryHandler}
          >
            <option value="0">Select Country</option>
            {this.props.countries.map((country, index) => {
              return (
                <option key={index} value={country.ID}>
                  {country.Country}
                </option>
              );
            })}
          </select>
        </div>
        {this.state.selectedValue ? (
          <button className="clearCountry" onClick={this.onClearCountryHandler}>
            Clear Country
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Country;
