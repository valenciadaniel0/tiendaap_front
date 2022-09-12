import React from "react";
import { connect } from "react-redux";
import { list } from "../../actions/category";
import ElementsList from "../../utils/elementsTable";
import Detail from "../items/detail";

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: null };
  }
  componentDidMount() {
    this.props.list(this.props.user.authentication_token);
  }

  buildCategories() {
    let items = [];
    this.props.categories.forEach((category) => {
      items.push({
        content: `${category.product.name} ${category.name}`,
        showButton: true,
        buttonText: "Detail",
        buttonAction: () => this.setCategory(category),
      });
    });
    return items;
  }

  setCategory(category) {
    this.setState({ category: null });
    this.setState({ category });
  }

  showDetail() {
    if (this.state.category) {
      let fakeItem = {
        category: this.state.category,
        product: this.state.category.product,
      };

      return <Detail item={fakeItem} />;
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <ElementsList
          items={this.buildCategories()}
          headers={["Image", "Name", "Actions"]}
        />
        {this.showDetail()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { list })(CategoriesList);
