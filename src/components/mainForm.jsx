import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class MainForm extends Component {
  state = {
    formdata: { username: "", age: "", gender: "", passport: "", license: "", city:"" },
    errors:{}
  };
  handleChange = (e) => {
    let data = { ...this.state.formdata };
    e.currentTarget.type === "checkbox"
      ? (data[e.currentTarget.name] = e.currentTarget.checked)
      : (data[e.currentTarget.name] = e.currentTarget.value);
    
    this.setState({ formdata: data });
  };
 validate=()=>{
    let err={};
    if(!this.state.formdata.username.trim()) err.name="UserName Required";
    if(!this.state.formdata.age.trim()) err.age="Age Required";
    if(!this.state.formdata.gender.trim()) err.gender="Gender Required";
    if(!this.state.formdata.city.trim()) err.city="City Required";
    return err;

 }

  handelSubmit = (e) => {
    e.preventDefault();
    let errors=this.validate();
    this.setState({errors:errors});
    let errCount=Object.keys(errors).length;
    console.log(errors);
    if(errCount>0) return;
    console.log(this.state.formdata);
  };
  render() {
    return (
      <div className="container">
        <h6>Name:</h6>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={this.handleChange}
            name="username"
            placeholder="Enter Name"
          />
          {this.state.errors.name?(
          <div className="alert alert-danger" role="alert">
          {this.state.errors.name}
        </div>):" "}
          <h6>Age:</h6>
          <input
            type="number"
            name="age"
            id="age"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter your Age"
            value={this.state.formdata.age}
          />
          {this.state.errors.age?(
          <div className="alert alert-danger" role="alert">
          {this.state.errors.age}
        </div>):" "}
        </div>

        <div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              value="Male"
              name="gender"
              id="male"
              checked={this.state.formdata.gender === "Male"} // if initial gender value is assigned then checking it automatically
              onChange={this.handleChange}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              value="Female"
              name="gender"
              id="female"
              checked={this.state.formdata.gender === "Female"}
              onChange={this.handleChange}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {this.state.errors.gender?(
          <div className="alert alert-danger" role="alert">
          {this.state.errors.gender}
        </div>):" "}
        <div>
          <div className="form-check">
            <input
              value={this.state.formdata.passport}
              onChange={this.handleChange}
              id="passport"
              name="passport"
              type="checkbox"
              checked={this.state.formdata.passport}
              className="form-check-input"
            />
            <label className="form-check-label">Passport</label>
          </div>
          <div className="form-check">
            <input
              value={this.state.formdata.license}
              onChange={this.handleChange}
              id="license"
              name="license"
              type="checkbox"
              checked={this.state.formdata.license}
              className="form-check-input"
            />
            <label className="form-check-label">License</label>
          </div>
        </div>
        <select 
        value={this.state.formdata.city}
        onChange={this.handleChange}
        id="city"
        className="form-control"
        name="city">
            <option value="" disabled>Select The City</option>
            <option>New Delhi</option>
            <option>Banglore</option>
            <option>Pune</option>
            <option>Hydreabad</option>
        </select>
        {this.state.errors.city?(
          <div className="alert alert-danger" role="alert">
          {this.state.errors.city}
        </div>):" "}
        <button className="btn btn-primary" onClick={this.handelSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default MainForm;
