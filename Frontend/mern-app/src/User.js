import React, { Component } from "react";
import axios from "axios";


export class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentDidMount = () => {
    axios.get("/user").then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <h1>The name of the user is : {this.state.name}</h1>
      </div>
    );
  }
}

export default User;
