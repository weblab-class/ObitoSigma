import React, { Component } from "react";
import SingleParcel from "./SingleParcel.js";
import { get } from "../../utilities";

/**
 * Cell is a component for displaying content like parcels and items
 *
 * Proptypes
 * @param {string} _id of the parcel
 * @param {string} tracking of the parcel
 * @param {string} worker_name
 * @param {string} worker_id
 */
class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SingleParcel
          _id={this.props._id}
          tracking={this.props.tracking}
          worker_name={this.props.worker_name}
          worker_id={this.props.worker_id}
        />
      </div>
    );
  }
}

export default Cell;