import React, { Component } from "react";

class DataBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedValue } = this.props;
    return (
      <div>
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Cases</h3>
              <div className="margin-10">
                <span className="fontBold">New:</span>
                <span className="caseCount">
                  {(selectedValue &&
                    selectedValue.NewConfirmed.toLocaleString()) ||
                    this.props.data.Global.NewConfirmed.toLocaleString()}
                </span>
              </div>
              <div className="margin-10">
                <span className="fontBold">Total:</span>
                <span className="caseCount">
                  {(selectedValue &&
                    selectedValue.TotalConfirmed.toLocaleString()) ||
                    this.props.data.Global.TotalConfirmed.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Deaths</h3>
              <div className="margin-10">
                <span className="fontBold">New:</span>
                <span className="caseCount">
                  {(selectedValue &&
                    selectedValue.NewDeaths.toLocaleString()) ||
                    this.props.data.Global.NewDeaths.toLocaleString()}
                </span>
              </div>
              <div className="margin-10">
                <span className="fontBold">Total:</span>
                <span className="caseCount">
                  {(selectedValue &&
                    selectedValue.TotalDeaths.toLocaleString()) ||
                    this.props.data.Global.TotalDeaths.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataBoxes;
