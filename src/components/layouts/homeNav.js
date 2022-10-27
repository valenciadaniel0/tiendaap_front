import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "semantic-ui-react";
import { logout } from "../../actions/user";

class HomeNav extends React.Component {
  logout() {
    this.props.logout();
  }

  render() {
    return (
      <Menu size="mini">
        <Menu.Item name="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="management">
          <Link to="/management">
            Management
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item text={this.props.user.name}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/users/profile">Profile</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button primary onClick={() => this.logout()}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { logout })(HomeNav);
