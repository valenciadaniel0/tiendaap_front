import React from "react";
import { connect } from "react-redux";
import { Container, Image, Item } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Item.Group>
          <Item>
            <Item.Image
              src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
              size="tiny"
            />
            <Item.Content>
              <Item.Header>{this.props.user.name}</Item.Header>
              <Item.Meta>
                <span>{this.props.user.username}</span>
              </Item.Meta>
              <Item.Description>Email</Item.Description>
              <Item.Meta>
                <span>{this.props.user.email}</span>
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Profile);
