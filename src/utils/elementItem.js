import React from "react";
import { Button, Image, List } from "semantic-ui-react";

const ElementItem = (props) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button>{props.buttonText}</Button>
      </List.Content>
      <Image size="small" src={props.imageUrl} />
      <List.Content>{props.content}</List.Content>
    </List.Item>
  );
};

export default ElementItem;
