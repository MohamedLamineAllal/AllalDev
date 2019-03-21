import React, { PureComponent, Fragment } from "react";
import { connect } from 'react-redux'

import "./styles.scss";
import { center } from "../../shared/Styles/styledElements";
import TransiText from "../../shared/TransitionText/Transi";
import Transi from "../../shared/TransitionText/Transi";
import { presets } from "react-text-transition";

import Waypoint from "react-waypoint";

import {
  minimize,
  expand
} from "./../../../actions/Main/GithubLinks/githubMascot";

function scrollSmoothly(scroll, duration, fps) {
    scrollRenderer(scroll/(duration * fps / 100), duration, fps, 0);
}

function scrollRenderer(scrollPart, duration, fps, elapsedTime) {
    // window.scrollTo(0, window.scrollY + scrollPart);
    window.scrollBy(0, scrollPart);
    elapsedTime+=1000/fps;
    if(duration <= elapsedTime) {
      console.log('elapsed = ', elapsedTime)
      return;
    }
    setTimeout(() => {
      scrollRenderer(scrollPart, duration, fps, elapsedTime);
    }, 1000/fps);
}

class TitleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.onTitleOut = this.onTitleOut.bind(this);
    this.onTitleIn = this.onTitleIn.bind(this);
    // this.scrollSmoothly = this.scrollSmoothly.bind(this);
  }

  onTitleOut() {
    // console.log('>onTitleout')
    // setTimeout(() => {
      this.props.dispatch(minimize());
    // }, 0);
    setTimeout(() => {
      scrollSmoothly(1000, 3000, 60);
      // window.scrollBy(0, 500);
    }, 50);
  }

  onTitleIn() {
    // console.log(">onTitleIn");
    // setTimeout(() => {
      this.props.dispatch(expand());
    // }, 0);
    setTimeout(() => {
      scrollSmoothly(1000, 3000, 60);
      // window.scrollBy(0, 500);      
    }, 50);
  }

  render() {
    return (
      <Fragment>
      <div
        style={{
          height: "150px",
          width: "100%", //   background: "gray",
          position: "relative"
        }}
        className="mainHomeTitleContainer"
      >
        {center(
          "div",
          {
            color: "white"
          },
          <div
            style={{
              position: "relative"
            }}
          >
            
            <TransiText
              texts={[
                "Hi there !",
                "I am Mohamed",
                "A Software developper",
                "I'm a front end developper, and full stack",
                "I don't like Coffee",
                "And i like choclate",
                "Here you find things i built, some playground",
                "or things to get to know me better \u2764 "
              ]}
              inerval={1000}
              prests={presets.wobbly}
            />
            <Waypoint onEnter={this.onTitleIn} onLeave={this.onTitleOut} />
          </div>
        )}
      </div>
      </Fragment>
    );
  }
}

export default connect()(TitleContainer);
