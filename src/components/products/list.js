import React from "react";
import { Navigate } from "react-router-dom";
import ElementsList from "../../utils/elementsTable";
import { list } from "../../actions/product";
import { connect } from "react-redux";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product_id: null };
  }

  componentDidMount() {
    this.props.list(this.props.user.authentication_token);
  }

  buildProducts() {
    let items = [];
    this.props.products.forEach((product) => {
      items.push({
        content: product.name,
        showButton: true,
        buttonText: "Detail",
        buttonAction: () => this.setState({ product_id: product.id }),
      });
    });
    return items;
  }

  renderContent() {
    if (!this.state.product_id) {
      return (
        <ElementsList
          items={this.buildProducts()}
          headers={["Image", "Name", "Actions"]}
        />
      );
    } else {
      return <Navigate to={`/products/${this.state.product_id}`} />;
    }
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    products: state.products,
  };
};
export default connect(mapStateToProps, { list })(ProductsList);
