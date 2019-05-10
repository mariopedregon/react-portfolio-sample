import React, { Component } from 'react';
import moment from "moment";

import  PortfolioContainer from "./portfolio/portfolio-container";


export default class app extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mario Pedregon's Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
