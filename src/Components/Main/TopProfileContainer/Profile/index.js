import React, { PureComponent } from "react";
import Avatar from "react-avatar";
import { center } from "../../../shared/Styles/styledElements";
import md5 from "md5";
import { Container, Row, Col } from "reactstrap";
// import './styles.scss';

export default class Profile extends PureComponent {
  render() {
    return center(
      "div",
      {
        style: {
          textAlign: "center"
        }
      },
      [
        <Avatar
          className="mainAvatar"
          size="200"
          facebook-id="100008085754908"
          email={this.props.email}
          src={`http://www.gravatar.com/avatar/${md5(this.props.email)}`}
          
          round
          // style={{
          //   border: "solid 5px #5a5abd"
          // }}
          key="avatar"
        />
        ,
        <Container key="myName">
          <Row>
            <Col className="nopadding">
              <h1
                style={{
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  color: "white", //627dda
                  fontSize: "2rem"
                }}
              >
                Mohamed Lamine Allal
              </h1>
            </Col>
          </Row>
        </Container>
      ]
    );
  }
}
