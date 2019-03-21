import React, { PureComponent } from 'react'
import {Container, Row, Col} from 'reactstrap';
export default class NavBar extends PureComponent {
    constructor() {
        super();
        this.containerStyle = {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '30px',
            background: 'white',
            zIndex: 2
        }
    }
  render() {
    return <Container fluid style={this.containerStyle}>
        <Row>
          <Col xs="4">
                <div className="d-flex justify-content-center align-items-center">
              &hearts;:Allal Mohamed With love:&hearts;
            </div>
          </Col>
          <Col xs="4">
                <div className="d-flex justify-content-center align-items-center">
              &hearts;:Allal Mohamed With love:&hearts;
            </div>
          </Col>
          <Col xs="4">
                <div className="d-flex justify-content-center align-items-center">
              &hearts;:Allal Mohamed With love:&hearts;
            </div>
          </Col>
        </Row>
      </Container>;
  }
}
