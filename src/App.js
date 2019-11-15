import React, { Component } from "react";
import MainForm from "./MainForm";
import MainSummary from "./MainSummary";
import "./App.css";

// This object will allow us to
// easily convert numbers into US dollar values

class New_App extends Component {
  state = {
    features: this.props.features,
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  /// FEATURES ///
  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={this.state.features}
            USCurrencyFormat={this.USCurrencyFormat}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />

          <MainSummary
            selected={this.state.selected}
            features={this.state.features}
            USCurrencyFormat={this.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default New_App;
