import React from "react";
import { Button, Image, List } from "semantic-ui-react";

const TableRow = (props) => {
  const buttonAction = () => {
    props.buttonAction();
  };
  const renderButton = () => {
    switch (props.showButton) {
      case true:
        return (
          <List.Content floated="right">
            <Button onClick={() => buttonAction()}>{props.buttonText}</Button>
          </List.Content>
        );
      default:
        return null;
    }
  };

  return (
    <List.Item>
      {renderButton()}
      <Image size="small" src={props.imageUrl} />
      <List.Content>{props.content}</List.Content>
    </List.Item>
  );
};

export default TableRow;
