import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftBar from "./LeftBar/";
import { Container, Row, Col } from "reactstrap";
import RightBar from "./RightBar";
import "./styles.scss";

export default class HomeLayout extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Container
          fluid
          style={{
            height: "100%",
            position: "relative"
          }}
        >
          <Row>
            <Col xs="12" className="nopadding">
              <Header />
            </Col>
          </Row>
          <Row
            style={{
              height: "100%",
              position: "relative"
            }}
          >
            <Col xs="1" className="nopadding">
              <LeftBar />
            </Col>
            <Col
              xs="10"
              style={{
                height: "100%",
                position: "relative"
              }}
              className="nopadding"
            >
              {/* <div className="mainCenterContainer_backgroundContainer">
                        <Container fluid style={
                            {
                                height: "100%"
                            }
                        }>
                            <Row style={
                                    {
                                        height: "100%"
                                    }
                            }>
                                <Col xs='1' className='nopadding'>
                                </Col>
                                
                                <Col xs='10' className='mainCenterContainer_background nopadding'>

                                </Col>

                                <Col xs='1' className='nopadding'>
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
              <div className="mainCenterContainer">{this.props.children}</div>
            </Col>
            <Col xs="1" className="nopadding">
              <RightBar />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
