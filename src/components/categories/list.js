import React from "react";
import { connect } from "react-redux";
import { list } from "../../actions/category";
import ElementsList from "../../utils/elementsList";

class CategoriesList extends React.Component {
  componentDidMount() {
    this.props.list(this.props.user.authentication_token);
  }

  buildItems() {
    let items = [];
    this.props.categories.forEach((category) => {
      items.push({ content: `${category.product.name} ${category.name}` });
    });
    return items;
  }

  render() {
    return <ElementsList items={this.buildItems()} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { list })(CategoriesList);
