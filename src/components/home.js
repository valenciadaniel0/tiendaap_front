import React from "react";
import { connect } from "react-redux";
import { search } from "../actions/item";
import Button from "./button";
import Field from "./field";
import HomeNav from "./layouts/homeNav";
import Detail from "./items/detail";
import ErrorAlert from "./alerts/errorAlert";
import CategoriesList from "./categories/list";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }

  searchProducts() {
    this.props.search(this.state.code, this.props.user.authentication_token);
  }

  showDetail() {
    if (this.props.item) {
      return <Detail item={this.props.item} />;
    }
    return null;
  }

  renderErrorMessage() {
    if (this.props.errorResponse) {
      return (
        <ErrorAlert
          header={"Item not found"}
          errorMessage={this.props.errorResponse}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <HomeNav />
        <div className="ui container">
          {this.renderErrorMessage()}
          <div className="ui fluid input">
            <Field
              key="home-code-input"
              label=""
              placeholder="Insert the code of the product"
              inputType="text"
              controlFunction={(code) => {
                this.setState({ code });
              }}
              currentValue={this.state.code}
            />
            <Button
              action={() => {
                this.searchProducts();
              }}
              text="OK"
            />
          </div>
        </div>
        {this.showDetail()}
        <CategoriesList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
    user: state.user,
    errorResponse: state.errorResponse,
  };
};

export default connect(mapStateToProps, { search })(Home);
