import React from "react";
import { List } from "semantic-ui-react";
import ElementItem from "./elementItem";

const ElementsList = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <ElementItem
          buttonText="Detail"
          imageUrl="https://exitocol.vtexassets.com/arquivos/ids/1976394-1200-auto?v=637259126418500000&width=1200&height=auto&aspect=true"
          content={item.content}
        />
      );
    });
  };
  return (
    <List divided verticalAlign="middle">
      {renderItems()}
    </List>
  );
};

export default ElementsList;
