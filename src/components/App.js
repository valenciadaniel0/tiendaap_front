import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import HomeNav from "./layouts/homeNav";
import Login from "./login";
import Home from "./home";
import Profile from "./users/profile";

class App extends React.Component {
  conditionalRendering() {
    if (this.props.user !== null) {
      return (
        <React.Fragment>
          <Route path="/" element={<Home />} />
          <Route path="users/profile" element={<Profile />} />
        </React.Fragment>
      );
    } else {
      return <Route path="/" element={<Login />} />;
    }
  }

  renderHomeNav() {
    if (this.props.user !== null) {
      return <HomeNav />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderHomeNav()}
        <Routes>{this.conditionalRendering()}</Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, {})(App);
