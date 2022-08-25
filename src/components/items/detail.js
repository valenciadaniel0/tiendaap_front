import React from "react";
import { Grid, List, Image } from "semantic-ui-react";
import ContentModal from "../../utils/contentModal";

class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = { category: props.item.category, product: props.item.product };
  }
  productDetail() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image src='https://exitocol.vtexassets.com/arquivos/ids/1976394-1200-auto?v=637259126418500000&width=1200&height=auto&aspect=true' />
          </Grid.Column>
          <Grid.Column width={8}>
            <List as='ul'>
              <List.Item as='li'>
                <List.Content>{this.state.product.description}</List.Content>
              </List.Item>
              <List.Item as='li'>
                <List.Content>{this.state.category.price}</List.Content>
              </List.Item>
              <List.Item as='li'>
                <List.Content>
                  {this.state.category.stock} available unities
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  productTitle() {
    return `${this.state.product.name} - ${this.state.category.name}`;
  }

  render() {
    return (
      <ContentModal title={this.productTitle()} open={true}>
        {this.productDetail()}
      </ContentModal>
    );
  }
}

export default Detail;
