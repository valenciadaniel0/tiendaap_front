import React from "react";
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from "semantic-ui-react";

class HomeNav extends React.Component {
  render() {
    return (
      <Menu size='mini'>
        <Menu.Item
          name='home'
          active={true}
        />
        <Menu.Item
          name='messages'
          active={false}
        />

        <Menu.Menu position='right'>
          <Dropdown item text={this.props.user.name}>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button primary>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, {})(HomeNav);
