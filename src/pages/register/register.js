import React, { Component } from "react";
import "./Register.module.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      city:'Raipur',
      yearofpassing:'',
      collegename:'',
      contact:'',
      ambassadorId:''
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You have successfully registered");
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      city:'Raipur',
      yearofpassing:'',
      collegename:'',
      contact:'',
      ambassadorId:''

    });
  }

  render() {
    return (
      <div className="register">
        <form onSubmit={this.displayLogin}>
          <h2>Signup</h2>

          <div className="name">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.update}
            />
          </div>

          <div className="email">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
          </div>
          <div className="contact">
            <input
              type="text"
              placeholder="Contact Number"
              name="contact"
              value={this.state.contact}
              onChange={this.update}
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder={this.state.city}
              name="city"
              onChange={this.update}
            />
          </div>
          <div className="email">
            <input
              type="number"
              placeholder="Year of Passing"
              name="yop"
              value={this.state.yearofpassing}
              onChange={this.update}
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="College Name"
              name="collegename"
              value={this.state.colegename}
              onChange={this.update}
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="SF ID of Ambassador(Optional)"
              name="ambassadorId"
              value={this.state.ambassadorId}
              onChange={this.update}
            />
          </div>

          

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Signup;
