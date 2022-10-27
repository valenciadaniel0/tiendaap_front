import React from "react";
import { Container } from "semantic-ui-react";
import ProductsList from "./products/list";
import Tabs from "../utils/tabs";

class Management extends React.Component {
  tabContent() {
    return [
      { name: "Users", content: "Users" },
      { name: "Products", content: <ProductsList /> },
    ];
  }
  render() {
    return (
      <Container>
        <Tabs panes={this.tabContent()} />
      </Container>
    );
  }
}

export default Management;
