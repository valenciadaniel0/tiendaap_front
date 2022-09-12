import React from "react";
import { List, Table, Button, Image } from "semantic-ui-react";
import TableRow from "./tableRow";

const ElementsTable = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <Table.Row>
          <Table.Cell>
            <Image
              size="small"
              src="https://exitocol.vtexassets.com/arquivos/ids/1976394-1200-auto?v=637259126418500000&width=1200&height=auto&aspect=true"
            />
          </Table.Cell>
          <Table.Cell>{item.content}</Table.Cell>
          <Table.Cell>
            <Button onClick={() => item.buttonAction()}>
              {item.buttonText}
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    });
  };
  const buildHeader = () => {
    return props.headers.map((header) => {
      return <Table.HeaderCell>{header}</Table.HeaderCell>;
    });
  };
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>{buildHeader()}</Table.Row>
      </Table.Header>
      <Table.Body>{renderItems()}</Table.Body>
    </Table>
  );
};

export default ElementsTable;
