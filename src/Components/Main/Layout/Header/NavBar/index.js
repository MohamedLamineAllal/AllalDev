import React, { PureComponent } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom'

export default class NavBar extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return <Navbar expand="md" className="mainHeader-navbar">
            <NavbarBrand href="/"style={
              {
                marginLeft: '86px'
              }
            }> &#10084; </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={
                  {
                    marginRight: '84px'
                  }
                }>
                <NavLink href="https://github.com/MohamedLamineAllal">
                    GitHub
                  </NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>;
    }
}
